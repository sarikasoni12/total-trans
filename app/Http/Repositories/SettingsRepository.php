<?php


namespace App\Http\Repositories;


use App\Models\CompanyModel;
use Illuminate\Database\Eloquent\Model;

class SettingsRepository
{

    public function get(int $id): ?Model
    {
        return CompanyModel::query()->where('id', $id)->first();
    }

    public function save(int $id, $data):int
    {
        return CompanyModel::query()->where('id', $id)->update($data);
    }
}
