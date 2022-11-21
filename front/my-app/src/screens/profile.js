/** ボタンコンポネント */
import { PageTransitonButton } from "../components/Button/PageTransitonButton";

export const Profile = () => {
  return (
    <div>
      プロフィールページです。
      <PageTransitonButton urlParam="index" />
      <PageTransitonButton urlParam="login" />
    </div>
  );

}