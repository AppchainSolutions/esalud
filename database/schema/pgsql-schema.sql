--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bateria; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bateria (
    descripcion character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    id integer NOT NULL
);


--
-- Name: examen_epo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_epo (
    paciente_id integer NOT NULL,
    comentario text,
    fecha_realizacion date DEFAULT '1900-01-01'::date,
    fecha_recepcion date DEFAULT '1900-01-01'::date,
    fecha_solicitud date DEFAULT '1900-01-01'::date,
    fecha_vencimiento date DEFAULT '1900-01-01'::date,
    numero_solicitud integer,
    resultado character varying,
    tipo_examen integer,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    semaforo integer,
    estado_epo integer,
    id integer NOT NULL,
    bateria_id integer,
    codigo_verificacion integer
);


--
-- Name: paciente; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.paciente (
    id bigint NOT NULL,
    rut character varying(255) NOT NULL,
    nombre character varying(255) NOT NULL,
    apellidos character varying(255) NOT NULL,
    actividad_economica character varying(255),
    seguro integer,
    afp integer,
    ceco integer,
    area integer,
    cargo character varying(255),
    ciudad character varying(255),
    direccion character varying(255),
    donante boolean DEFAULT false,
    edad integer,
    email character varying(255),
    empresa integer,
    estado_civil integer,
    exposicion character varying(255),
    fecha_nacimiento date,
    grupo_sanguineo integer,
    instruccion integer,
    ley_social integer,
    ocupacion character varying(255),
    planta integer,
    prevision integer,
    profesion character varying(255),
    pueblo integer,
    religion integer,
    telefono1 character varying(255),
    telefono2 character varying(255),
    unidad integer,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now(),
    genero integer,
    modalidad character varying,
    areatxt character varying,
    activo boolean DEFAULT true,
    nacionalidad integer,
    email_verified_at timestamp with time zone[],
    remember_token character varying,
    password character varying,
    protocolo_minsal boolean DEFAULT false
);


--
-- Name: ListaCorreos; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public."ListaCorreos" AS
 SELECT examen_epo.fecha_vencimiento,
    examen_epo.numero_solicitud,
    paciente.rut,
    paciente.nombre,
    paciente.apellidos,
    bateria.descripcion AS bateria,
    paciente.activo
   FROM ((public.paciente
     JOIN public.examen_epo ON ((paciente.id = examen_epo.paciente_id)))
     JOIN public.bateria ON ((examen_epo.bateria_id = bateria.id)))
  WHERE ((examen_epo.fecha_vencimiento >= '2024-12-15'::date) AND (examen_epo.fecha_vencimiento <= '2024-12-22'::date) AND (paciente.activo = true))
  ORDER BY examen_epo.fecha_vencimiento;


--
-- Name: accidente; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accidente (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: accidente_condicion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.accidente_condicion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: accidente_condicion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accidente_condicion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: accidente_condicion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accidente_condicion_id_seq OWNED BY public.accidente_condicion.id;


--
-- Name: accidente_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.accidente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: accidente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.accidente_id_seq OWNED BY public.accidente.id;


--
-- Name: seguro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.seguro (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: adm_seguro_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.adm_seguro_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: adm_seguro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.adm_seguro_id_seq OWNED BY public.seguro.id;


--
-- Name: adm_seguro_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.seguro ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.adm_seguro_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: afp; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.afp (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: afp_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.afp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: afp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.afp_id_seq OWNED BY public.afp.id;


--
-- Name: afp_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.afp ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.afp_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: alergia; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.alergia (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    alergia character varying(255),
    comentario character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: alergia_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.alergia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: alergia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.alergia_id_seq OWNED BY public.alergia.id;


--
-- Name: alergia_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.alergia ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.alergia_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: antecedente_familiar; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.antecedente_familiar (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    patologia character varying(255),
    parentesco character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: antecedente_familiar_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.antecedente_familiar_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: antecedente_familiar_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.antecedente_familiar_id_seq OWNED BY public.antecedente_familiar.id;


--
-- Name: antecedente_familiar_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.antecedente_familiar ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.antecedente_familiar_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: area; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.area (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: area_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.area_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: area_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.area_id_seq OWNED BY public.area.id;


--
-- Name: area_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.area ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.area_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: atencion_diaria; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.atencion_diaria (
    id bigint NOT NULL,
    paciente_id integer DEFAULT 0 NOT NULL,
    accidente integer DEFAULT 0,
    accidente_condicion integer DEFAULT 0,
    alerta_she boolean DEFAULT false,
    at_realizada_por character varying(255),
    calificacion integer DEFAULT 0,
    cuenta_acr boolean DEFAULT false,
    declaracion_completa boolean DEFAULT false,
    derivacion integer DEFAULT 0,
    derivacion_inmediata boolean DEFAULT false,
    descripcion_breve character varying(255),
    dias_descanso integer DEFAULT 0,
    error_critico integer DEFAULT 0,
    estado_mental integer DEFAULT 0,
    fecha_atencion date,
    fuente_incidente integer DEFAULT 0,
    hora_inicio time(0) without time zone,
    hora_termino time(0) without time zone,
    lugar_atencion integer DEFAULT 0,
    medicamentos character varying(255),
    medio_derivacion integer DEFAULT 0,
    motivo_consulta character varying(255),
    nombre_supervisor character varying(255),
    puede_reintegrarse boolean,
    "RECA" character varying(255),
    responsable integer DEFAULT 0,
    sistema_afectado integer DEFAULT 0,
    tipo_atencion integer DEFAULT 0,
    tipo_licencia integer DEFAULT 0,
    turno integer DEFAULT 0,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    acompanado boolean DEFAULT false,
    comentario text
);


--
-- Name: atencion_diaria_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.atencion_diaria_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: atencion_diaria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.atencion_diaria_id_seq OWNED BY public.atencion_diaria.id;


--
-- Name: atencion_diaria_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.atencion_diaria ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.atencion_diaria_id_seq1
    START WITH 3745
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: bateria_idx_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bateria_idx_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bateria_idx_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bateria_idx_seq OWNED BY public.bateria.id;


--
-- Name: cache; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cache (
    key character varying(255) NOT NULL,
    value text NOT NULL,
    expiration integer NOT NULL
);


--
-- Name: cache_locks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cache_locks (
    key character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    expiration integer NOT NULL
);


--
-- Name: calificacion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.calificacion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: calificacion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.calificacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: calificacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.calificacion_id_seq OWNED BY public.calificacion.id;


--
-- Name: calificacion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.calificacion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.calificacion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: ceco; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ceco (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: ceco_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ceco_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ceco_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ceco_id_seq OWNED BY public.ceco.id;


--
-- Name: ceco_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.ceco ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ceco_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: certificacion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.certificacion (
    id bigint NOT NULL,
    paciente_id bigint,
    certificacion character varying,
    fecha_certificacion date,
    fecha_caducidad date,
    estado_certificacion integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: certificacion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.certificacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: certificacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.certificacion_id_seq OWNED BY public.certificacion.id;


--
-- Name: certificacion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.certificacion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.certificacion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: cie10; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cie10 (
    id bigint NOT NULL,
    descripcion character varying(255),
    codigo character varying(20),
    created_at timestamp with time zone DEFAULT now(),
    updated_at time with time zone DEFAULT now()
);


--
-- Name: cie10_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.cie10 ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cie10_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: cirugia; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cirugia (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    cirugia character varying(255),
    comentario character varying(255),
    created_at timestamp(0) with time zone,
    updated_at timestamp(0) with time zone,
    fecha_cirugia character varying(255)
);


--
-- Name: cirugia_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cirugia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cirugia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cirugia_id_seq OWNED BY public.cirugia.id;


--
-- Name: cirugia_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.cirugia ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cirugia_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: derivacion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.derivacion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: derivacion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.derivacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: derivacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.derivacion_id_seq OWNED BY public.derivacion.id;


--
-- Name: derivacion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.derivacion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.derivacion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: diat; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.diat (
    paciente_id integer NOT NULL,
    accidente integer,
    seguro integer,
    comentario character varying(255),
    fecha_admision date,
    folio integer,
    numero_resolucion integer,
    origen_denuncia character varying(255),
    sucursal character varying(255),
    tipo_accidente integer,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    idpgp integer,
    validado_por character varying,
    estado_diat integer,
    id integer NOT NULL,
    aprobado boolean
);


--
-- Name: diat_idx_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.diat_idx_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: diat_idx_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.diat_idx_seq OWNED BY public.diat.id;


--
-- Name: diep; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.diep (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    seguro integer,
    comentario character varying(255),
    fecha_admision date,
    folio integer,
    numero_resolucion integer,
    origen_denuncia character varying(255),
    tipo_enfermedad integer,
    validado_por character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    idpgp integer,
    enfermedad character varying(255),
    estado_diep character varying
);


--
-- Name: diep_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.diep_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: diep_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.diep_id_seq OWNED BY public.diep.id;


--
-- Name: diep_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.diep ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.diep_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: documentos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.documentos (
    id bigint NOT NULL,
    idatencion integer NOT NULL,
    size integer NOT NULL,
    name integer NOT NULL,
    archivo integer NOT NULL,
    "refID" integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: documentos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.documentos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: documentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.documentos_id_seq OWNED BY public.documentos.id;


--
-- Name: estado_civil; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estado_civil (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: ecivil_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ecivil_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ecivil_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ecivil_id_seq OWNED BY public.estado_civil.id;


--
-- Name: ecivil_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.estado_civil ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ecivil_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: error_critico; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.error_critico (
    id bigint NOT NULL,
    descripcion character varying(255),
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: ecritico_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ecritico_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ecritico_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ecritico_id_seq OWNED BY public.error_critico.id;


--
-- Name: ecritico_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.error_critico ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ecritico_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: estado_mental; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estado_mental (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: emental_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.emental_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: emental_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.emental_id_seq OWNED BY public.estado_mental.id;


--
-- Name: empresa; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.empresa (
    id bigint NOT NULL,
    direccion character varying(255),
    email character varying(255),
    descripcion character varying(255) NOT NULL,
    razon_social character varying(255),
    representante character varying(255),
    responsable character varying(255),
    telefono character varying(255),
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now(),
    rut character varying(20)
);


--
-- Name: empresa_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.empresa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: empresa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.empresa_id_seq OWNED BY public.empresa.id;


--
-- Name: empresa_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.empresa ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.empresa_id_seq1
    START WITH 24
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: enfermedad; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.enfermedad (
    paciente_id integer NOT NULL,
    comentario character varying(255),
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now(),
    id integer NOT NULL,
    trastorno_cronico integer
);


--
-- Name: enfermedad_d_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.enfermedad_d_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: enfermedad_d_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.enfermedad_d_seq OWNED BY public.enfermedad.id;


--
-- Name: estado_certificacion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estado_certificacion (
    id bigint NOT NULL,
    descripcion character varying,
    created_at timestamp with time zone DEFAULT now(),
    updatedd_at timestamp with time zone DEFAULT now()
);


--
-- Name: estado_certificacion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.estado_certificacion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.estado_certificacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: estado_epo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estado_epo (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: estado_examen; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estado_examen (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: estado_examen_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.estado_examen_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: estado_examen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.estado_examen_id_seq OWNED BY public.estado_examen.id;


--
-- Name: estatus_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.estatus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: estatus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.estatus_id_seq OWNED BY public.estado_epo.id;


--
-- Name: estatus_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.estado_epo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.estatus_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: examen_asma; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_asma (
    id bigint NOT NULL,
    estado_examen integer,
    paciente_id integer NOT NULL,
    idpgp integer,
    comentario character varying(255),
    fecha_control date,
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: examen_asma_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_asma_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_asma_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_asma_id_seq OWNED BY public.examen_asma.id;


--
-- Name: examen_ayd; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_ayd (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    idpgp integer,
    fecha_control date,
    comentario character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    test_drogas integer
);


--
-- Name: examen_ayd_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_ayd_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_ayd_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_ayd_id_seq OWNED BY public.examen_ayd.id;


--
-- Name: examen_ayd_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_ayd ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_ayd_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_epo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_epo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_epo_id_seq
    START WITH 2743
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_equilibrio; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_equilibrio (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    fecha_examen date,
    comentario character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    resultado character varying(10) DEFAULT '"No Apto"'::character varying
);


--
-- Name: examen_equilibrio_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_equilibrio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_equilibrio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_equilibrio_id_seq OWNED BY public.examen_equilibrio.id;


--
-- Name: examen_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_id_seq OWNED BY public.examen.id;


--
-- Name: examen_psm; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_psm (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    contraindicacion character varying(255),
    fecha_solicitud date,
    fecha_realizacion date,
    fecha_recepcion date,
    fecha_vencimiento date,
    dias_restantes integer,
    comentario character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    tipo_vehiculo character varying(255),
    estado_examen integer
);


--
-- Name: examen_psm_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_psm_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_psm_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_psm_id_seq OWNED BY public.examen_psm.id;


--
-- Name: examen_psm_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_psm ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_psm_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_pvmoal; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvmoal (
    paciente_id integer NOT NULL,
    idpgp integer NOT NULL,
    comentario character varying(255),
    fecha_control date,
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    estado_examen integer,
    id integer NOT NULL
);


--
-- Name: examen_pvmoal_x_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvmoal_x_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvmoal_x_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvmoal_x_seq OWNED BY public.examen_pvmoal.id;


--
-- Name: examen_pvmohn; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvmohn (
    paciente_id integer NOT NULL,
    idpgp integer,
    comentario character varying(255),
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    id integer NOT NULL,
    estado_examen integer,
    fecha_control date
);


--
-- Name: examen_pvmohn_id_seq2; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvmohn_id_seq2
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvmohn_id_seq2; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvmohn_id_seq2 OWNED BY public.examen_pvmohn.id;


--
-- Name: examen_pvmom; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvmom (
    paciente_id integer NOT NULL,
    idpgp integer,
    comentario character varying(255),
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    estado_examen integer,
    id integer NOT NULL,
    fecha_control date
);


--
-- Name: examen_pvmom_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvmom_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvmom_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvmom_id_seq OWNED BY public.examen_pvmom.id;


--
-- Name: examen_pvmor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvmor (
    paciente_id integer NOT NULL,
    idpgp integer,
    comentario character varying(255),
    fecha_control date,
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now(),
    estatus character varying(255),
    id integer NOT NULL,
    estado_examen integer
);


--
-- Name: examen_pvmor_id_seq2; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvmor_id_seq2
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvmor_id_seq2; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvmor_id_seq2 OWNED BY public.examen_pvmor.id;


--
-- Name: examen_pvmos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvmos (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    idpgp integer,
    comentario character varying(255),
    fecha_control date,
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at time(0) without time zone DEFAULT now(),
    updated_at time(0) without time zone DEFAULT now(),
    estado_examen integer
);


--
-- Name: examen_pvmos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvmos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvmos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvmos_id_seq OWNED BY public.examen_pvmos.id;


--
-- Name: examen_pvmos_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_pvmos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_pvmos_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_pvmosol; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvmosol (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    idpgp integer,
    comentario character varying(255),
    fecha_control date,
    fecha_ingreso date,
    fecha_prox_control date,
    fecha_ult_control date,
    created_at time(0) without time zone DEFAULT now(),
    updated_at time without time zone DEFAULT now(),
    estado_examen integer
);


--
-- Name: examen_pvmosol_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvmosol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvmosol_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvmosol_id_seq OWNED BY public.examen_pvmosol.id;


--
-- Name: examen_pvmosol_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_pvmosol ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_pvmosol_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_pvt; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_pvt (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    fecha_examen date,
    fecha_control date,
    nordico character varying(255),
    quickdash character varying(255),
    derivacion character varying(255),
    comentario character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    estado_examen integer
);


--
-- Name: examen_pvt_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_pvt_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_pvt_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_pvt_id_seq OWNED BY public.examen_pvt.id;


--
-- Name: examen_pvt_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_pvt ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_pvt_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_respirador; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_respirador (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    fecha_examen date,
    prueba_ajuste character varying(255),
    talla_respirador character varying(255),
    modelo_marca character varying(255),
    comentario character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: examen_respirador_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_respirador_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_respirador_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_respirador_id_seq OWNED BY public.examen_respirador.id;


--
-- Name: examen_respirador_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_respirador ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_respirador_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_salud; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_salud (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    colesterol_hdl character varying(255),
    colesterol_ldl character varying(255),
    colesterol_total character varying(255),
    comentario character varying(255),
    creatinemia character varying(255),
    ecg character varying(255),
    espirometria character varying(255),
    estatus character varying(255),
    fecha_recepcion date,
    framingham character varying(255),
    glicemia character varying(255),
    hba1c character varying(255),
    hemoglobina character varying(255),
    hemograma character varying(255),
    optometria character varying(255),
    trigliceridos character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: examen_salud_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_salud_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_salud_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_salud_id_seq OWNED BY public.examen_salud.id;


--
-- Name: examen_salud_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_salud ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_salud_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: examen_somnolencia; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.examen_somnolencia (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    comentario character varying(255),
    fecha_examen date,
    fecha_primer date,
    fecha_segundo date,
    resultado character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    nivel_riesgo integer
);


--
-- Name: examen_somnolencia_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.examen_somnolencia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: examen_somnolencia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.examen_somnolencia_id_seq OWNED BY public.examen_somnolencia.id;


--
-- Name: examen_somnolencia_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.examen_somnolencia ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.examen_somnolencia_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: exposicion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exposicion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: exposicion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exposicion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exposicion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exposicion_id_seq OWNED BY public.exposicion.id;


--
-- Name: exposicion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.exposicion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.exposicion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: factor_riesgo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.factor_riesgo (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    factor_riesgo character varying(255),
    comentario character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: factor_riesgo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.factor_riesgo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: factor_riesgo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.factor_riesgo_id_seq OWNED BY public.factor_riesgo.id;


--
-- Name: factor_riesgo_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.factor_riesgo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.factor_riesgo_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;


--
-- Name: fuente_incidente; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fuente_incidente (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: fuente_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.fuente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: fuente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.fuente_id_seq OWNED BY public.fuente_incidente.id;


--
-- Name: fuente_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.fuente_incidente ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.fuente_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: genero; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genero (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: genero_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genero_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genero_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genero_id_seq OWNED BY public.genero.id;


--
-- Name: genero_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.genero ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.genero_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: grupo_sanguineo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.grupo_sanguineo (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: grupo_sanguineo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.grupo_sanguineo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: grupo_sanguineo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.grupo_sanguineo_id_seq OWNED BY public.grupo_sanguineo.id;


--
-- Name: grupo_sanguineo_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.grupo_sanguineo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.grupo_sanguineo_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: headers_tables; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.headers_tables (
    id bigint NOT NULL,
    tabla character varying(255) NOT NULL,
    idtabla integer NOT NULL,
    json character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: headers_tables_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.headers_tables_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: headers_tables_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.headers_tables_id_seq OWNED BY public.headers_tables.id;


--
-- Name: instruccion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.instruccion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: instruccion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.instruccion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: instruccion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.instruccion_id_seq OWNED BY public.instruccion.id;


--
-- Name: instruccion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.instruccion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.instruccion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: ley_social; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ley_social (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: ley_social_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ley_social_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ley_social_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ley_social_id_seq OWNED BY public.ley_social.id;


--
-- Name: ley_social_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.ley_social ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.ley_social_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: licencia_medica; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.licencia_medica (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    comentario character varying(255),
    fecha_emision date,
    fecha_inicio date,
    fecha_recepcion date,
    fecha_termino date,
    folio integer,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now(),
    caract_reposo character varying,
    lugar_reposo character varying,
    tipo_licencia character varying,
    titulo_profesional character varying,
    nombre_profesional character varying,
    recuperabilidad_laboral boolean DEFAULT false,
    inicio_invalidez boolean DEFAULT false
);


--
-- Name: licencia_medica_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.licencia_medica_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: licencia_medica_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.licencia_medica_id_seq OWNED BY public.licencia_medica.id;


--
-- Name: licencia_medica_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.licencia_medica ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.licencia_medica_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: lugar_atencion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lugar_atencion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: lugar_atencion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lugar_atencion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lugar_atencion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lugar_atencion_id_seq OWNED BY public.lugar_atencion.id;


--
-- Name: medicamento; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.medicamento (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    medicamento character varying(255),
    comentario character varying(255),
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: medicamento_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.medicamento_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: medicamento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.medicamento_id_seq OWNED BY public.medicamento.id;


--
-- Name: medicamento_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.medicamento ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.medicamento_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: medio_derivacion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.medio_derivacion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: medio_derivacion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.medio_derivacion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: medio_derivacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.medio_derivacion_id_seq OWNED BY public.medio_derivacion.id;


--
-- Name: medio_derivacion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.medio_derivacion ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.medio_derivacion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: modalidad; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.modalidad (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: modalidad_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.modalidad_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: modalidad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.modalidad_id_seq OWNED BY public.modalidad.id;


--
-- Name: modalidad_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.modalidad ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.modalidad_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: nacionalidad; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.nacionalidad (
    id integer NOT NULL,
    descripcion character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: nacionalidad_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.nacionalidad_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: nacionalidad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.nacionalidad_id_seq OWNED BY public.nacionalidad.id;


--
-- Name: newpacientes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.newpacientes (
    rut character varying
);


--
-- Name: nivel_riesgo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.nivel_riesgo (
    id bigint NOT NULL,
    descripcion character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: nivel_riesgo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.nivel_riesgo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.nivel_riesgo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 99
    CACHE 1
);


--
-- Name: notifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notifications (
    id uuid NOT NULL,
    type character varying(255) NOT NULL,
    notifiable_type character varying(255) NOT NULL,
    notifiable_id bigint NOT NULL,
    data text NOT NULL,
    read_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: paciente_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.paciente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: paciente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.paciente_id_seq OWNED BY public.paciente.id;


--
-- Name: paciente_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.paciente ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.paciente_id_seq1
    START WITH 2440
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: password_reset_tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);


--
-- Name: personal_access_tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.personal_access_tokens (
    id bigint NOT NULL,
    tokenable_type character varying(255) NOT NULL,
    tokenable_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    token character varying(64) NOT NULL,
    abilities text,
    last_used_at timestamp(0) without time zone,
    expires_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.personal_access_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.personal_access_tokens_id_seq OWNED BY public.personal_access_tokens.id;


--
-- Name: planta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.planta (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: planta_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.planta_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: planta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.planta_id_seq OWNED BY public.planta.id;


--
-- Name: planta_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.planta ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.planta_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: prevision; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.prevision (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: prevision_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.prevision_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: prevision_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.prevision_id_seq OWNED BY public.prevision.id;


--
-- Name: prevision_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.prevision ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.prevision_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: pueblo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pueblo (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: pueblo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pueblo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pueblo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pueblo_id_seq OWNED BY public.pueblo.id;


--
-- Name: pueblo_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.pueblo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pueblo_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: religion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.religion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: religion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.religion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: religion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.religion_id_seq OWNED BY public.religion.id;


--
-- Name: religion_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.religion ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.religion_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: responsable; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.responsable (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: responsable_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.responsable_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: responsable_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.responsable_id_seq OWNED BY public.responsable.id;


--
-- Name: responsable_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.responsable ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.responsable_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: semaforo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.semaforo (
    id bigint NOT NULL,
    descripcion character varying,
    created_at timestamp with time zone[],
    updated_at timestamp with time zone
);


--
-- Name: riesgo_semaforo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.semaforo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.riesgo_semaforo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: ruts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ruts (
    rut character varying,
    password character varying
);


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id character varying(255) NOT NULL,
    user_id bigint,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);


--
-- Name: sistema_afectado; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sistema_afectado (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now()
);


--
-- Name: sistema_afectado_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sistema_afectado_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sistema_afectado_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sistema_afectado_id_seq OWNED BY public.sistema_afectado.id;


--
-- Name: sistema_afectado_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.sistema_afectado ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sistema_afectado_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: team_invitations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.team_invitations (
    id bigint NOT NULL,
    team_id bigint NOT NULL,
    email character varying(255) NOT NULL,
    role character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: team_invitations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.team_invitations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: team_invitations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.team_invitations_id_seq OWNED BY public.team_invitations.id;


--
-- Name: team_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.team_user (
    id bigint NOT NULL,
    team_id bigint NOT NULL,
    user_id bigint NOT NULL,
    role character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: team_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.team_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: team_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.team_user_id_seq OWNED BY public.team_user.id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teams (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    personal_team boolean NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: teams_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.teams_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: teams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.teams_id_seq OWNED BY public.teams.id;


--
-- Name: test_drogas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.test_drogas (
    id bigint NOT NULL,
    descripcion character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


--
-- Name: test_drogas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.test_drogas ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.test_drogas_id_seq
    START WITH 8
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: tipo_accidente; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tipo_accidente (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: tipo_accidente_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tipo_accidente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tipo_accidente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tipo_accidente_id_seq OWNED BY public.tipo_accidente.id;


--
-- Name: tipo_accidente_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tipo_accidente ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipo_accidente_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: tipo_atencion; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tipo_atencion (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: tipo_atencion_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tipo_atencion_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tipo_atencion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tipo_atencion_id_seq OWNED BY public.tipo_atencion.id;


--
-- Name: tipo_enfermedad; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tipo_enfermedad (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: tipo_enfermedad_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tipo_enfermedad_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tipo_enfermedad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tipo_enfermedad_id_seq OWNED BY public.tipo_enfermedad.id;


--
-- Name: tipo_examen; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tipo_examen (
    id bigint NOT NULL,
    descripcion character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: tipo_examen_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.tipo_examen ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tipo_examen_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: tipo_licencia; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tipo_licencia (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: tipo_licencia_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tipo_licencia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tipo_licencia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tipo_licencia_id_seq OWNED BY public.tipo_licencia.id;


--
-- Name: trastorno_cronico; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trastorno_cronico (
    id integer NOT NULL,
    descripcion character varying,
    cie10 character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


--
-- Name: trastorno_cronico_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trastorno_cronico_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trastorno_cronico_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trastorno_cronico_id_seq OWNED BY public.trastorno_cronico.id;


--
-- Name: turno; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.turno (
    id bigint NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: turno_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.turno_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: turno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.turno_id_seq OWNED BY public.turno.id;


--
-- Name: unidad; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.unidad (
    id bigint NOT NULL,
    area integer,
    descripcion character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: unidad_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.unidad ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.unidad_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    rut character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    current_team_id bigint,
    profile_photo_path character varying(2048),
    created_at timestamp(0) without time zone DEFAULT now(),
    updated_at timestamp(0) without time zone DEFAULT now(),
    two_factor_secret text,
    two_factor_recovery_codes text,
    two_factor_confirmed_at timestamp(0) without time zone,
    "isAdmin" boolean DEFAULT false,
    notification_exepo boolean DEFAULT false
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: vacuna; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vacuna (
    id bigint NOT NULL,
    paciente_id integer NOT NULL,
    vacuna character varying(255),
    tipo_vacuna character varying(255),
    fecha_vacuna character varying(255),
    comentario character varying(255),
    created_at timestamp(0) with time zone DEFAULT now(),
    updated_at timestamp(0) with time zone DEFAULT now()
);


--
-- Name: vacuna_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vacuna_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: vacuna_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vacuna_id_seq OWNED BY public.vacuna.id;


--
-- Name: vacuna_id_seq1; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.vacuna ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vacuna_id_seq1
    START WITH 322
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: accidente id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accidente ALTER COLUMN id SET DEFAULT nextval('public.accidente_id_seq'::regclass);


--
-- Name: accidente_condicion id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accidente_condicion ALTER COLUMN id SET DEFAULT nextval('public.accidente_condicion_id_seq'::regclass);


--
-- Name: bateria id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bateria ALTER COLUMN id SET DEFAULT nextval('public.bateria_idx_seq'::regclass);


--
-- Name: diat id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.diat ALTER COLUMN id SET DEFAULT nextval('public.diat_idx_seq'::regclass);


--
-- Name: documentos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documentos ALTER COLUMN id SET DEFAULT nextval('public.documentos_id_seq'::regclass);


--
-- Name: enfermedad id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enfermedad ALTER COLUMN id SET DEFAULT nextval('public.enfermedad_d_seq'::regclass);


--
-- Name: estado_examen id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_examen ALTER COLUMN id SET DEFAULT nextval('public.estado_examen_id_seq'::regclass);


--
-- Name: estado_mental id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_mental ALTER COLUMN id SET DEFAULT nextval('public.emental_id_seq'::regclass);


--
-- Name: examen id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen ALTER COLUMN id SET DEFAULT nextval('public.examen_id_seq'::regclass);


--
-- Name: examen_asma id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_asma ALTER COLUMN id SET DEFAULT nextval('public.examen_asma_id_seq'::regclass);


--
-- Name: examen_equilibrio id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_equilibrio ALTER COLUMN id SET DEFAULT nextval('public.examen_equilibrio_id_seq'::regclass);


--
-- Name: examen_pvmoal id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmoal ALTER COLUMN id SET DEFAULT nextval('public.examen_pvmoal_x_seq'::regclass);


--
-- Name: examen_pvmohn id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmohn ALTER COLUMN id SET DEFAULT nextval('public.examen_pvmohn_id_seq2'::regclass);


--
-- Name: examen_pvmom id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmom ALTER COLUMN id SET DEFAULT nextval('public.examen_pvmom_id_seq'::regclass);


--
-- Name: examen_pvmor id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmor ALTER COLUMN id SET DEFAULT nextval('public.examen_pvmor_id_seq2'::regclass);


--
-- Name: failed_jobs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);


--
-- Name: headers_tables id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.headers_tables ALTER COLUMN id SET DEFAULT nextval('public.headers_tables_id_seq'::regclass);


--
-- Name: lugar_atencion id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lugar_atencion ALTER COLUMN id SET DEFAULT nextval('public.lugar_atencion_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: nacionalidad id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nacionalidad ALTER COLUMN id SET DEFAULT nextval('public.nacionalidad_id_seq'::regclass);


--
-- Name: personal_access_tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.personal_access_tokens ALTER COLUMN id SET DEFAULT nextval('public.personal_access_tokens_id_seq'::regclass);


--
-- Name: team_invitations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_invitations ALTER COLUMN id SET DEFAULT nextval('public.team_invitations_id_seq'::regclass);


--
-- Name: team_user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_user ALTER COLUMN id SET DEFAULT nextval('public.team_user_id_seq'::regclass);


--
-- Name: teams id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teams ALTER COLUMN id SET DEFAULT nextval('public.teams_id_seq'::regclass);


--
-- Name: tipo_atencion id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_atencion ALTER COLUMN id SET DEFAULT nextval('public.tipo_atencion_id_seq'::regclass);


--
-- Name: tipo_enfermedad id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_enfermedad ALTER COLUMN id SET DEFAULT nextval('public.tipo_enfermedad_id_seq'::regclass);


--
-- Name: tipo_licencia id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_licencia ALTER COLUMN id SET DEFAULT nextval('public.tipo_licencia_id_seq'::regclass);


--
-- Name: trastorno_cronico id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trastorno_cronico ALTER COLUMN id SET DEFAULT nextval('public.trastorno_cronico_id_seq'::regclass);


--
-- Name: turno id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.turno ALTER COLUMN id SET DEFAULT nextval('public.turno_id_seq'::regclass);


--
-- Name: accidente_condicion accidente_condicion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accidente_condicion
    ADD CONSTRAINT accidente_condicion_pkey PRIMARY KEY (id);


--
-- Name: accidente accidente_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.accidente
    ADD CONSTRAINT accidente_pkey PRIMARY KEY (id);


--
-- Name: seguro adm_seguro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.seguro
    ADD CONSTRAINT adm_seguro_pkey PRIMARY KEY (id);


--
-- Name: afp afp_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.afp
    ADD CONSTRAINT afp_pkey PRIMARY KEY (id);


--
-- Name: alergia alergia_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alergia
    ADD CONSTRAINT alergia_pkey PRIMARY KEY (id);


--
-- Name: antecedente_familiar antecedente_familiar_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.antecedente_familiar
    ADD CONSTRAINT antecedente_familiar_pkey PRIMARY KEY (id);


--
-- Name: area area_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.area
    ADD CONSTRAINT area_pkey PRIMARY KEY (id);


--
-- Name: atencion_diaria atencion_diaria_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.atencion_diaria
    ADD CONSTRAINT atencion_diaria_pkey PRIMARY KEY (id);


--
-- Name: bateria bateria_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bateria
    ADD CONSTRAINT bateria_pkey PRIMARY KEY (id);


--
-- Name: cache_locks cache_locks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cache_locks
    ADD CONSTRAINT cache_locks_pkey PRIMARY KEY (key);


--
-- Name: cache cache_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cache
    ADD CONSTRAINT cache_pkey PRIMARY KEY (key);


--
-- Name: calificacion calificacion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.calificacion
    ADD CONSTRAINT calificacion_pkey PRIMARY KEY (id);


--
-- Name: ceco ceco_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ceco
    ADD CONSTRAINT ceco_pkey PRIMARY KEY (id);


--
-- Name: certificacion certificacion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.certificacion
    ADD CONSTRAINT certificacion_pkey PRIMARY KEY (id);


--
-- Name: cie10 cie10_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cie10
    ADD CONSTRAINT cie10_pkey PRIMARY KEY (id);


--
-- Name: cirugia cirugia_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cirugia
    ADD CONSTRAINT cirugia_pkey PRIMARY KEY (id);


--
-- Name: derivacion derivacion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.derivacion
    ADD CONSTRAINT derivacion_pkey PRIMARY KEY (id);


--
-- Name: diat diat_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.diat
    ADD CONSTRAINT diat_pkey PRIMARY KEY (id);


--
-- Name: diep diep_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.diep
    ADD CONSTRAINT diep_pkey PRIMARY KEY (id);


--
-- Name: documentos documentos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_pkey PRIMARY KEY (id);


--
-- Name: estado_civil ecivil_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_civil
    ADD CONSTRAINT ecivil_pkey PRIMARY KEY (id);


--
-- Name: error_critico ecritico_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.error_critico
    ADD CONSTRAINT ecritico_pkey PRIMARY KEY (id);


--
-- Name: estado_mental emental_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_mental
    ADD CONSTRAINT emental_pkey PRIMARY KEY (id);


--
-- Name: empresa empresa_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pkey PRIMARY KEY (id);


--
-- Name: enfermedad enfermedad_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enfermedad
    ADD CONSTRAINT enfermedad_pkey PRIMARY KEY (id);


--
-- Name: estado_certificacion estado_certificacion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_certificacion
    ADD CONSTRAINT estado_certificacion_pkey PRIMARY KEY (id);


--
-- Name: estado_examen estado_examen_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_examen
    ADD CONSTRAINT estado_examen_pkey PRIMARY KEY (id);


--
-- Name: estado_epo estatus_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estado_epo
    ADD CONSTRAINT estatus_pkey PRIMARY KEY (id);


--
-- Name: examen_asma examen_asma_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_asma
    ADD CONSTRAINT examen_asma_pkey PRIMARY KEY (id);


--
-- Name: examen_ayd examen_ayd_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_ayd
    ADD CONSTRAINT examen_ayd_pkey PRIMARY KEY (id);


--
-- Name: examen_epo examen_epo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_epo
    ADD CONSTRAINT examen_epo_pkey PRIMARY KEY (id);


--
-- Name: examen_equilibrio examen_equilibrio_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_equilibrio
    ADD CONSTRAINT examen_equilibrio_pkey PRIMARY KEY (id);


--
-- Name: examen examen_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen
    ADD CONSTRAINT examen_pkey PRIMARY KEY (id);


--
-- Name: examen_psm examen_psm_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_psm
    ADD CONSTRAINT examen_psm_pkey PRIMARY KEY (id);


--
-- Name: examen_pvmoal examen_pvmoal_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmoal
    ADD CONSTRAINT examen_pvmoal_pk PRIMARY KEY (id);


--
-- Name: examen_pvmohn examen_pvmohn_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmohn
    ADD CONSTRAINT examen_pvmohn_pkey PRIMARY KEY (id);


--
-- Name: examen_pvmom examen_pvmom_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmom
    ADD CONSTRAINT examen_pvmom_pkey PRIMARY KEY (id);


--
-- Name: examen_pvmor examen_pvmor_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmor
    ADD CONSTRAINT examen_pvmor_pkey PRIMARY KEY (id);


--
-- Name: examen_pvmos examen_pvmos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmos
    ADD CONSTRAINT examen_pvmos_pkey PRIMARY KEY (id);


--
-- Name: examen_pvmosol examen_pvmosol_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvmosol
    ADD CONSTRAINT examen_pvmosol_pkey PRIMARY KEY (id);


--
-- Name: examen_pvt examen_pvt_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_pvt
    ADD CONSTRAINT examen_pvt_pkey PRIMARY KEY (id);


--
-- Name: examen_respirador examen_respirador_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_respirador
    ADD CONSTRAINT examen_respirador_pkey PRIMARY KEY (id);


--
-- Name: examen_salud examen_salud_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_salud
    ADD CONSTRAINT examen_salud_pkey PRIMARY KEY (id);


--
-- Name: examen_somnolencia examen_somnolencia_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_somnolencia
    ADD CONSTRAINT examen_somnolencia_pkey PRIMARY KEY (id);


--
-- Name: exposicion exposicion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exposicion
    ADD CONSTRAINT exposicion_pkey PRIMARY KEY (id);


--
-- Name: factor_riesgo factor_riesgo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.factor_riesgo
    ADD CONSTRAINT factor_riesgo_pkey PRIMARY KEY (id);


--
-- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- Name: failed_jobs failed_jobs_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);


--
-- Name: fuente_incidente fuente_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fuente_incidente
    ADD CONSTRAINT fuente_pkey PRIMARY KEY (id);


--
-- Name: genero genero_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (id);


--
-- Name: grupo_sanguineo grupo_sanguineo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.grupo_sanguineo
    ADD CONSTRAINT grupo_sanguineo_pkey PRIMARY KEY (id);


--
-- Name: headers_tables headers_tables_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.headers_tables
    ADD CONSTRAINT headers_tables_pkey PRIMARY KEY (id);


--
-- Name: instruccion instruccion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.instruccion
    ADD CONSTRAINT instruccion_pkey PRIMARY KEY (id);


--
-- Name: ley_social ley_social_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ley_social
    ADD CONSTRAINT ley_social_pkey PRIMARY KEY (id);


--
-- Name: licencia_medica licencia_medica_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.licencia_medica
    ADD CONSTRAINT licencia_medica_pkey PRIMARY KEY (id);


--
-- Name: lugar_atencion lugar_atencion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lugar_atencion
    ADD CONSTRAINT lugar_atencion_pkey PRIMARY KEY (id);


--
-- Name: medicamento medicamento_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medicamento
    ADD CONSTRAINT medicamento_pkey PRIMARY KEY (id);


--
-- Name: medio_derivacion medio_derivacion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medio_derivacion
    ADD CONSTRAINT medio_derivacion_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: modalidad modalidad_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.modalidad
    ADD CONSTRAINT modalidad_pkey PRIMARY KEY (id);


--
-- Name: nacionalidad nacionalidad_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nacionalidad
    ADD CONSTRAINT nacionalidad_pkey PRIMARY KEY (id);


--
-- Name: nivel_riesgo nivel_riesgo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.nivel_riesgo
    ADD CONSTRAINT nivel_riesgo_pkey PRIMARY KEY (id);


--
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- Name: paciente paciente_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_pkey PRIMARY KEY (id);


--
-- Name: paciente paciente_rut_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_rut_unique UNIQUE (rut);


--
-- Name: password_reset_tokens password_reset_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);


--
-- Name: personal_access_tokens personal_access_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_pkey PRIMARY KEY (id);


--
-- Name: personal_access_tokens personal_access_tokens_token_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);


--
-- Name: planta planta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.planta
    ADD CONSTRAINT planta_pkey PRIMARY KEY (id);


--
-- Name: prevision prevision_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.prevision
    ADD CONSTRAINT prevision_pkey PRIMARY KEY (id);


--
-- Name: pueblo pueblo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pueblo
    ADD CONSTRAINT pueblo_pkey PRIMARY KEY (id);


--
-- Name: religion religion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.religion
    ADD CONSTRAINT religion_pkey PRIMARY KEY (id);


--
-- Name: responsable responsable_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.responsable
    ADD CONSTRAINT responsable_pkey PRIMARY KEY (id);


--
-- Name: semaforo riesgo_semaforo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semaforo
    ADD CONSTRAINT riesgo_semaforo_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sistema_afectado sistema_afectado_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sistema_afectado
    ADD CONSTRAINT sistema_afectado_pkey PRIMARY KEY (id);


--
-- Name: team_invitations team_invitations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_invitations
    ADD CONSTRAINT team_invitations_pkey PRIMARY KEY (id);


--
-- Name: team_invitations team_invitations_team_id_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_invitations
    ADD CONSTRAINT team_invitations_team_id_email_unique UNIQUE (team_id, email);


--
-- Name: team_user team_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_user
    ADD CONSTRAINT team_user_pkey PRIMARY KEY (id);


--
-- Name: team_user team_user_team_id_user_id_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_user
    ADD CONSTRAINT team_user_team_id_user_id_unique UNIQUE (team_id, user_id);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);


--
-- Name: test_drogas test_drogas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.test_drogas
    ADD CONSTRAINT test_drogas_pkey PRIMARY KEY (id);


--
-- Name: tipo_accidente tipo_accidente_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_accidente
    ADD CONSTRAINT tipo_accidente_pkey PRIMARY KEY (id);


--
-- Name: tipo_atencion tipo_atencion_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_atencion
    ADD CONSTRAINT tipo_atencion_pkey PRIMARY KEY (id);


--
-- Name: tipo_enfermedad tipo_enfermedad_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_enfermedad
    ADD CONSTRAINT tipo_enfermedad_pkey PRIMARY KEY (id);


--
-- Name: tipo_examen tipo_examen_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_examen
    ADD CONSTRAINT tipo_examen_pkey PRIMARY KEY (id);


--
-- Name: tipo_licencia tipo_licencia_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tipo_licencia
    ADD CONSTRAINT tipo_licencia_pkey PRIMARY KEY (id);


--
-- Name: trastorno_cronico trastorno_cronico_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trastorno_cronico
    ADD CONSTRAINT trastorno_cronico_pkey PRIMARY KEY (id);


--
-- Name: turno turno_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.turno
    ADD CONSTRAINT turno_pkey PRIMARY KEY (id);


--
-- Name: unidad unidad_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.unidad
    ADD CONSTRAINT unidad_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_rut_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_rut_unique UNIQUE (rut);


--
-- Name: vacuna vacuna_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vacuna
    ADD CONSTRAINT vacuna_pkey PRIMARY KEY (id);


--
-- Name: notifications_notifiable_type_notifiable_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX notifications_notifiable_type_notifiable_id_index ON public.notifications USING btree (notifiable_type, notifiable_id);


--
-- Name: personal_access_tokens_tokenable_type_tokenable_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON public.personal_access_tokens USING btree (tokenable_type, tokenable_id);


--
-- Name: sessions_last_activity_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);


--
-- Name: sessions_user_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);


--
-- Name: teams_user_id_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX teams_user_id_index ON public.teams USING btree (user_id);


--
-- Name: examen_epo semaforo; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.examen_epo
    ADD CONSTRAINT semaforo FOREIGN KEY (semaforo) REFERENCES public.semaforo(id) NOT VALID;


--
-- Name: team_invitations team_invitations_team_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_invitations
    ADD CONSTRAINT team_invitations_team_id_foreign FOREIGN KEY (team_id) REFERENCES public.teams(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	2014_10_12_000000_create_paciente_table	1
2	2014_10_12_000000_create_users_table	1
3	2014_10_12_100000_create_password_reset_tokens_table	1
4	2014_10_12_200000_add_two_factor_columns_to_users_table	1
5	2019_08_19_000000_create_failed_jobs_table	1
6	2019_12_14_000001_create_personal_access_tokens_table	1
7	2020_05_21_100000_create_teams_table	1
8	2020_05_21_200000_create_team_user_table	1
9	2020_05_21_300000_create_team_invitations_table	1
10	2023_11_03_012524_create_sessions_table	1
11	2023_11_24_223651_create_headers_tables	1
12	2023_12_06_005319_create_alergia_table	1
13	2023_12_06_005458_create_antecedente_familiar_table	1
14	2023_12_06_005527_create_atencion_diaria_table	1
15	2023_12_06_005553_create_cirugia_table	1
16	2023_12_06_005602_create_diat_table	1
17	2023_12_06_005607_create_diep_table	1
18	2023_12_06_005616_create_documentos_table	1
19	2023_12_06_005626_create_empresa_table	1
20	2023_12_06_005636_create_enfermedad_table	1
21	2023_12_06_005701_create_examen_ayd_table	1
22	2023_12_06_005718_create_examen_epo_table	1
23	2023_12_06_005727_create_examen_equilibrio_table	1
24	2023_12_06_005740_create_examen_pvmoal_table	1
25	2023_12_06_005753_create_examen_pvmohn_table	1
26	2023_12_06_005815_create_examen_pvmom_table	1
27	2023_12_06_005821_create_examen_pvmor_table	1
28	2023_12_06_005849_create_examen_pvmos_table	1
29	2023_12_06_005909_create_examen_pvmosol_table	1
30	2023_12_06_005916_create_examen_pvt_table	1
31	2023_12_06_005923_create_examen_salud_table	1
32	2023_12_06_005933_create_examen_somnolencia_table	1
33	2023_12_06_005948_create_factor_riesgo_table	1
34	2023_12_06_010013_create_licencia_medica_table	1
35	2023_12_06_010022_create_medicamento_table	1
37	2023_12_07_164902_create_examen_psm_table	1
38	2023_12_07_184544_create_examen_respirador_table	1
39	2024_01_03_142700_create_certificacion_table	1
40	2024_01_04_032613_create_notifications_table	1
41	2024_01_12_193203_create_cache_table	1
42	2024_01_13_235956_create_accidente_condicion	1
43	2024_01_14_000116_create_accidente_table	1
45	2024_01_14_000144_create_afp_table	1
46	2024_01_14_000159_create_area_table	1
47	2024_01_14_000259_create_calificacion_table	1
48	2024_01_14_000527_create_ceco_table	1
49	2024_01_14_000543_create_cie10_table	1
50	2024_01_14_000635_create_derivacion_table	1
51	2024_01_14_000650_create_ecivil_table	1
53	2024_01_14_000750_create_estatus_diatdiep_table	1
54	2024_01_14_003014_create_estatus_table	1
55	2024_01_14_003021_create_examen_table	1
56	2024_01_14_003028_create_exposicion_table	1
57	2024_01_14_003034_create_fuente_table	1
58	2024_01_14_003040_create_genero_table	1
59	2024_01_14_003136_create_grupo_sanguineo_table	1
60	2024_01_14_003748_create_instruccion_table	1
61	2024_01_14_003802_create_ley_social_table	1
62	2024_01_14_003812_create_lugar_atencion_table	1
63	2024_01_14_003829_create_medio_derivacion_table	1
64	2024_01_14_003900_create_modalidad_table	1
65	2024_01_14_003906_create_planta_table	1
66	2024_01_14_003915_create_prevision_table	1
67	2024_01_14_003931_create_pueblo_table	1
68	2024_01_14_003938_create_religion_table	1
69	2024_01_14_003946_create_responsable_table	1
70	2024_01_14_003957_create_sistema_afectado_table	1
71	2024_01_14_004008_create_tipo_accidente_table	1
72	2024_01_14_004017_create_tipo_atencion_table	1
73	2024_01_14_004025_create_tipo_enfermedad_table	1
74	2024_01_14_004102_create_tipo_licencia_table	1
75	2024_01_14_004116_create_turno_table	1
76	2024_01_14_004123_create_unidad_table	1
44	2024_01_14_000130_create_seguro_table	1
77	2024_01_15_231943_ecritico_table	2
79	2024_01_14_000733_create_emental_table	4
82	2023_12_06_010047_create_vacuna_table	5
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 82, true);


--
-- PostgreSQL database dump complete
--

