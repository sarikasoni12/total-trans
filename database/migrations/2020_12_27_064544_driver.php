<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Driver extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement("
                create table driver (
                    id int(11) primary key not null AUTO_INCREMENT,
                    name varchar (255) not null,
                    date_of_joining date not null,
                    date_of_departure date,
                    cents_per_mile int not null
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
        \DB::statment("drop table driver");
    }
}
