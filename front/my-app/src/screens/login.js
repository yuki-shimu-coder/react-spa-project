/** ボタンコンポネント */
import { PageTransitonButton } from "../components/PageTransitonButton";


export const Login = () => {
  return (
    <div>
      ログインページです。
      <PageTransitonButton urlParam="profile" />
      <PageTransitonButton urlParam="index" />
    </div>
  );

}