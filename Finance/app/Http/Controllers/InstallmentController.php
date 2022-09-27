<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\installment;
use App\Models\Borrowlist;

use Illuminate\Support\Facades\Auth;

class InstallmentController extends Controller
{
    public function list(Request $request)
    {
        $date = ($request->input('date'))?date("Y-m-d",strtotime($request->input('date'))):date("Y-m-d");
        //$date = date("Y-m-d",strtotime($request->input('date')));
        $borrowerids = Borrowlist::select('id')->where("userId",Auth::id())->get()->toArray();
        $borrowerids = array_map(function($e){
            return $e['id'];
        },$borrowerids);
       
        return installment::with('borrower') 
            ->where('installmentDate', '=', $date)
            ->whereIn('borrowId',$borrowerids)
            ->get();
    }

    public function UpdatePaidStatus(Request $request){
        $id = $request->input('installment_id');
        $date = ($request->input('date'))?date("Y-m-d",strtotime($request->input('date'))):date("Y-m-d");
        $installment = installment::find($id);
        $status = $installment->paidStatus;
        $installment->paidStatus = ($status)?0:1;
        try{
            $installment->save();
            return $this->list($request);
        }catch(Exception $e){
            print_r($e);
        }
    }
}
