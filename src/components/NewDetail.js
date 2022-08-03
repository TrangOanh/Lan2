import React from "react";
import {useParams} from 'react-router-dom'
import dl from "../DuLieu.json";
import NewsRelative from "./NewsRelative";
function NewDetail() {
    var {id}=useParams();
    var dem=1;//Do không thể khai báo biến trong phần return được, nên ta khai báo trên đây, ngoài phần return
    //duyệt từng phần tử trong dữ liệu "dl" đã import
    return ( 
        <main>
            {/* Bắt đầu 1 dòng  */}
            {
                dl.map((value,key)=>{
                        if(id==value.id){
                            return(
                                <div className="chitiet">
                                    <img  src={value.anh} />
                                    <h4>{value.tieude}</h4>
                                    <p>{value.trichdan}</p>
                                </div>
                            )
                        }
                    }
                )                
            }
            {/* Kết thúc 1 dòng  */}
            {/* Bắt đầu 1 dòng  */}
            <div className="dong">
                {
                    dl.map((value,key)=>{
                        if(id!=value.id){
                            if(dem<=4){
                                dem++;
                                return(
                                    <NewsRelative key={key} tieuDe={value.tieuDe} anh={value.anh} trichdan={value.trichDan} tinId={value.id}></NewsRelative>
                                )
                            }
                        }
                    })
                }
            </div>
      </main>
    );
}
export default NewDetail
