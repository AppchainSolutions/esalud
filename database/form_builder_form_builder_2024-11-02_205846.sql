DROP TABLE IF EXISTS form_builder;
CREATE TABLE "form_builder" ("id" integer primary key autoincrement not null, "form_id" varchar not null, "order" integer, "row" integer, "endpoint" varchar, "url" varchar, "name" varchar not null, "label" varchar not null, "type" varchar not null, "disabled" tinyint(1), "readonly" tinyint(1), "multiple" tinyint(1), "expanded" tinyint(1), "dense" tinyint(1), "autofocus" tinyint(1), "chips" tinyint(1), "query_search" tinyint(1), "required" tinyint(1), "clearable" tinyint(1), "hide_details" tinyint(1), "inset" tinyint(1), "items" text, "variant" varchar, "cols" integer, "md" integer, "sm" integer, "created_at" datetime, "updated_at" datetime);
INSERT INTO form_builder(id,form_id,order,row,endpoint,url,name,label,type,disabled,readonly,multiple,expanded,dense,autofocus,chips,query_search,required,clearable,hide_details,inset,items,variant,cols,md,sm,created_at,updated_at) VALUES('1','frmPacientes','1','1',null,null,'rut','RUT','string','false','false',null,null,null,null,null,null,'true','true',null,null,null,'underlined','6','4','2',null,null),('2','frmPacientes','2','1',null,null,'nombre','Nombre','string',null,null,null,null,null,null,null,null,'true','true',null,null,null,'underlined','6','4','2',null,null),('3','frmPacientes','3','1',null,null,'apellidos','Apellidos','string',null,null,null,null,null,null,null,null,'true','true',null,null,null,'underlined','6','4','2',null,null),('4','frmPacientes','4','1',null,null,'fecha_nacimiento','Fecha de Nacimiento','date',null,null,null,null,null,null,null,null,'false','true',null,null,null,'underlined',null,null,null,null,null);