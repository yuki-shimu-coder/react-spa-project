/** ナビゲーション */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/** クリック処理 */
export const PageTransitonButton = ({ urlParam }) => {
  /** ナビゲーションの設定 */
  const navigate = useNavigate();
  /** ボタン内テキスト */
  const [text, setText] = useState();

  console.log(urlParam);

  /**　クリック時の処理 */
  const onClick = (urlParam) => {
    if (urlParam === 'login') {
      return navigate('/login');
    }
    if (urlParam === 'profile') {
      return navigate('/profile')
    }
    if (urlParam === 'index') {
      return navigate('/');
    }
  }

  /** useEffect */
  useEffect(() => {
    if(urlParam === 'login'){
      setText('ログイン')
    } else if (urlParam === 'profile') {
      setText('プロフィール')
    } else if (urlParam === 'index') {
      setText('トップ')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <button onClick={() => {
      onClick(urlParam)
    }}>{text}ページへ</button>
  );
}