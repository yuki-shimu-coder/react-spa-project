/** ボタンコンポネント */
import { PageTransitonButton } from "../components/PageTransitonButton";

export const Profile = () => {
  return (
    <div>
      プロフィールページです。
      <PageTransitonButton urlParam="index" />
      <PageTransitonButton urlParam="login" />
    </div>
  );

}