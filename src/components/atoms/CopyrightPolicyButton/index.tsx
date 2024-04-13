import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    DiscList,
    ListItem,
  } from "@yamada-ui/react"

const CopyrightPolicyButton = () => {

    const styles = {
        btn: "block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <button
            className={styles.btn}
            type="button"
            onClick={onOpen}
        >
        Copyright Disclaimer Policy
        </button>
        <Modal isOpen={isOpen} onClose={onClose} style={{ backgroundColor: 'white' }} duration={0.4}>
            <ModalHeader>利用上の注意</ModalHeader>

            <ModalBody>
                <DiscList>
                    <ListItem>サービスを利用して生成された画像に関する一切の責任はご利用者様に負担いただくものとします。ご利用者様が生成した画像に関し、第三者が損害を被った場合、運営者はご利用者様に代わっての責任は一切負いません。</ListItem>
                    <ListItem>本サービスを利用して生成された画像はインターネット上に公開されます。元画像の著作権や関連法規に注意してください。公序良俗に反する画像や違法な画像を作成しないでください。これらの画像、その他運営者が不適切と判断した画像は予告無しに削除することがあります。</ListItem>
                    <ListItem>過剰な数のリクエストを送信してサービスに負荷をかける行為はおやめください。</ListItem>
                    <ListItem>その他、悪質な利用方法が確認された場合、特定のご利用者様を予告無しにアクセス禁止にすることがあります。</ListItem>
                </DiscList>
            </ModalBody>

            <ModalFooter>
                <Button variant="ghost" onClick={onClose}>
                とじる
                </Button>
            </ModalFooter>
            </Modal>
        </>
    )
}

export default CopyrightPolicyButton
