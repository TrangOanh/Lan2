import React,{Component} from "react";
import NewsItem from "./NewsItem";
import dl from "../DuLieu.json";
class News extends Component {
    render() {
        return (
            <main>
                <div className="dong">
                   {
                        dl.map((value,key)=>{
                            return(
                                <NewsItem key={key} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan} tinId={value.id}></NewsItem>
                            )
                        })
                   }
                </div>
            </main>
        );
    }
}
export default News;

