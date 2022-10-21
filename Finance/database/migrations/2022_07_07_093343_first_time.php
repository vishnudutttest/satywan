<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FirstTime extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('BorrowLists',function (Blueprint $table){
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('address');
            $table->decimal('AmountGiven', $precision = 8, $scale = 2);
            $table->integer('no_of_installment');
            $table->enum('intallmentType', ['daily', 'monthly']);
            $table->decimal('installmentAmount', $precision = 8, $scale = 2);
            $table->integer('userId');
            $table->date('installmentStartDate');
            $table->timestamps();
        });

        Schema::create('Installment',function (Blueprint $table){
            $table->id();
            $table->integer('borrowId');
            $table->integer('ownerId');
            $table->integer('instalmentNumber');
            $table->decimal('installmentAmount', $precision = 8, $scale = 2);
            $table->date('installmentDate');
            $table->integer('paidStatus');
            $table->timestamps();
        });
       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('BorrowList');
        Schema::dropIfExists('Installment');
        
    }
}
