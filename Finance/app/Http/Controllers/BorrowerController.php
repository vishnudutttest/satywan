<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Borrowlist;
use App\Models\installment;
use Illuminate\Support\Facades\Auth;

class BorrowerController extends Controller
{
    public function list(Request $request)
    {
        return Borrowlist::where('userId', Auth::id())->orderBy('id', 'DESC')
        ->get();
    }

    public function AddNew(Request $request)
    {
       
        $validated = $request->validate([
            'name1' => 'required|max:255',
            'email' => 'email:rfc,dns',
            'phone'=> 'required',
            'address'=> 'required',
            'AmountGiven'=> 'required|integer',
            'no_of_installment'=> 'required|integer',
            'intallmentType'=> 'required',
            'installmentAmount'=> 'required|integer',
            'installmentStartDate'=> 'required|date',
        ]);
        
        if(!$validated){
            return $validated;
        }
        
        $borrower = New Borrowlist();
        $borrower->name  = $request->input('name1');
        $borrower->email  = $request->input('email'); 
        $borrower->phone  =  $request->input('phone');
        $borrower->address  = $request->input('address');
        $borrower->AmountGiven  =  $request->input('AmountGiven');
        $borrower->no_of_installment  = $request->input('no_of_installment');
        $borrower->intallmentType  =  $request->input('intallmentType');
        $borrower->installmentAmount  =  $request->input('installmentAmount');
        $borrower->installmentStartDate  = $request->input('installmentStartDate');
        $borrower->userId = Auth::id();
        return $borrower->save();
    }

    public function borrower($id){
       $borrower = Borrowlist::find($id);
       $installments = installment::where("borrowId","=",$id)
       ->get();
       return ['borrower'=>$borrower,'installments'=>$installments];
    }

}
