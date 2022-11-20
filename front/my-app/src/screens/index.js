/** ボタンコンポネント */
import { PageTransitonButton } from "../components/PageTransitonButton";

export const Index = () => {
  return (
    <div>
      トップページです。
      <PageTransitonButton urlParam="login" />
      <PageTransitonButton urlParam="profile" />
    </div>
  );

}