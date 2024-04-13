const CopyrightPolicyButton = () => {

    const POLICY_SEGMENT = "#policy"

    const styles = {
        btn: "block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
    }

    const goToPolicy = () => {
        window.location.href = window.location.href + POLICY_SEGMENT
    }


    return (
        <button
                        className={styles.btn}
                        type="button"
                        onClick={goToPolicy}
                    >
                        Copyright Disclaimer Policy
                    </button>
    )
}

export default CopyrightPolicyButton
