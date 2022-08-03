import React,{Component} from "react";
import {Navigate} from "react-router-dom";
class Contact extends Component {
    constructor(prop){
        super(prop);
        this.state={
            isRedirect:false,
            fDate:"Thứ 2",//gán giá trị mặc định, khi người dùng không chọn vào select
            //TA KHONG CẦN KHAI BÁO CÁC BIẾT STATE NÀY CŨNG ĐƯỢC - NÓ TỰ HIỂU ĐỐI VỚI FORM
            // fName:"",//Biến state chứa tên phần tử, dành cho fName
            // fEmail:"",
            // fPhone:"",
            // fMass:"",
        }
    }

    isFileChange(event){
        // const a=event.target.files;//Cái này nó sẽ trả về một đối tượng mảng, mỗi phần tử sẽ chứa các thuộc tính khác nahu
        // const b=event.target.files[0];//Cái này sẽ trả về phần tử mảng đầu tiên, chứa các thông số như tên file, kícfh thước, ...
        const tenanh=event.target.files[0].name;//cái này trả về tên file được chọn, ngoài ra còn .size, .path, ...vvv
        //THiết lập state không cần phải cùng một chổ, ta đặt đâu cũng được 
        this.setState({
            fAnh:tenanh,
        })
    }
    isChange=(event)=>{
        const ten=event.target.name;//Lấy tên của ô text box
        const giatri=event.target.value;//lấy giá trị ô text box đang thay đổi giá  trị
        //console.log(ten+" "+giatri);
        this.setState({
            //Cách thiết lập nhiều phần tử form và value của nó, xem thêm thông tin sử dụng kỷ thuật này
            [ten]:giatri,//[ten] chứa tên của các đối tượng được tác động sự kiện (onChange),và giá trị là nội dung của đối tượng đó (value), 
        })
    }
    submitForm(event){
        event.preventDefault();//Hàm này dùng để chận không cho nút submit chuyển trang cho form
            this.setState({
                isRedirect:true,
                
            }); 
    }
    getGiatri(){
        var noiDung="";
        noiDung+="Tên là: "+this.state.fName+" ";
        noiDung+="Email: "+this.state.fEmail+" ";
        noiDung+="Phone là: "+this.state.fPhone+" ";
        noiDung+="Mess là: "+this.state.fMass+" ";
        noiDung+="Date là: "+this.state.fDate+" ";
        noiDung+="Images là: "+this.state.fAnh;
        return noiDung;
    }
    render(){
        if(this.state.isRedirect===true){//Lưu ý, phải để trong phần render nó mới thực hiện
            console.log(this.getGiatri());
            return <Navigate to="/"></Navigate>;
        }
        return (
            <main>
                <div className="gopy">
                    <form>
                        <h4>Name</h4>
                        <input type="text" className="text" name="fName" onChange={(event)=>this.isChange(event)}/>
                        <h4>Email Address</h4>
                        <input type="text" className="text" name="fEmail" onChange={(event)=>this.isChange(event)}/>
                        <h4>Phone Number</h4>
                        <input type="text" className="text" name="fPhone" onChange={(event)=>this.isChange(event)}/>
                        <h4>Massage</h4>
                        <textarea className="multitext" defaultValue={""} name="fMass" onChange={(event)=>this.isChange(event)}/>
                        <h4>Select file</h4>
                        <input type="file" className="text" name="fAnh" onChange={(event)=>this.isFileChange(event)}/>
                        <h4>Select Date</h4>
                        {/* Chọn giá trị mặc định khi người sử dụng không chọn select  */}
                        <select name="fDate" onChange={(event)=>this.isChange(event)}>
                            <option  value="Thứ 2">Thứ 2</option>
                            <option value="Thứ 3">Thứ 3</option>
                            <option value="Thứ 4">Thứ 4</option>
                            <option value="Thứ 5">Thứ 5</option>
                            <option value="Thứ 6">Thứ 6</option>
                            <option value="Thứ 7">Thứ 7</option>
                            <option value="Thứ Nhật">Thứ Nhật</option>
                        </select>
                        <input type="submit" defaultValue="Gửi" className="button" onClick={(event)=>this.submitForm(event)}/>
                    </form>
                </div>
            </main>
        );
    }
}
export default Contact;
