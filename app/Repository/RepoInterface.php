<?php

namespace App\Repository;

use Illuminate\Http\Request;

/**
 * Interface RepositoryInterface
 *
 * This interface defines the methods that should be implemented by a repository class.
 */
interface RepoInterface
{
    public function all();

    public function store(Request $request);

    public function update(Request $request);

    public function delete(Request $request);

    public function search(Request $request);
}
