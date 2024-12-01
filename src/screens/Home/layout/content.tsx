import HeaderLeft from "@/screens/components/layout/HeaderLeft";
import Main from "./main";
import { useI18n } from "@/lang";
import { useNavActiveId } from "@/store/common/hook";

const Content = () => {
  const t = useI18n();
  const title = useNavActiveId();
  return (
    <>
      <HeaderLeft title={t(title)} />
      <Main />
    </>
  );
};

export default Content;
