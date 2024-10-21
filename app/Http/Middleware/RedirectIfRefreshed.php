<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfRefreshed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the request is a page refresh
        /*        if ($request->headers->get('referer') === $request->fullUrl()) {
                  return redirect()->route('dashboard');
              }  */
        return $next($request);
    }
}
