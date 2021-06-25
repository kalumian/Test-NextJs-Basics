import Link from 'next/link'
import {useRouter} from 'next/router'

const NotFound = () => {
    const Router = useRouter()
  return (
    <div className="not-found" style={{textAlign:"center",direction:'rtl'}}>
      <h1>Ooops...</h1>
      <h2>عذراً هذه الصفحة غير موجودة ! :(</h2>
      <p>العودة للخلف <a style={{cursor:'pointer',color:"blue", textDecoration:'underline'}} onClick={() => Router.back()}>اضغط هنا</a></p>
    </div>
  );
}
 
export default NotFound;