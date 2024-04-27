import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  DiscList,
  ListItem,
} from "@yamada-ui/react";

const CopyrightPolicyButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className="text-2xl hover:transition-all hover:font-bold"
        style={{ fontFamily: "thin" }}
        onClick={onOpen}
      >
        Policies
      </button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        style={{ backgroundColor: "white" }}
        duration={0.4}
      >
        <ModalHeader>免責事項&プライバシーポリシー</ModalHeader>

        <ModalBody>
          <DiscList>
            <ListItem>
              サービスを利用して生成された画像に関する一切の責任はご利用者様に負担いただくものとします。ご利用者様が生成した画像に関し、第三者が損害を被った場合、運営者はご利用者様に代わっての責任は一切負いません。
            </ListItem>
            <ListItem>
              本サービスを利用して生成された画像はインターネット上に公開されます。元画像の著作権や関連法規に注意してください。公序良俗に反する画像や違法な画像を作成しないでください。これらの画像、その他運営者が不適切と判断した画像は予告無しに削除することがあります。
            </ListItem>
            <ListItem>
              過剰な数のリクエストを送信してサービスに負荷をかける行為はおやめください。
            </ListItem>
            <ListItem>
              その他、悪質な利用方法が確認された場合、特定のご利用者様を予告無しにアクセス禁止にすることがあります。
            </ListItem>
            <ListItem>
              プライバシーポリシー変更について当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
            </ListItem>
          </DiscList>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            とじる
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CopyrightPolicyButton;
