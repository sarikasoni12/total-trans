<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Trip extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement("
            create table trip (
                id int(11) primary key auto_increment not null,
                pickup_date date not null,
                expected_delivery_date date not null,
                delivery_date date not null,
                truck_unit int(11) not null,
                trailer_unit int(11) not null,
                pickup_location varchar(255) not null,
                delivery_location varchar(255) not null,
                broker tinyint(1) not null,
                miles int(11) not null,
                price int(11) not null,
                currency varchar(255) not null default 'CAD',
                conversion_rate float not null default 1
            )
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \DB::statment('drop table trip');
    }
}
