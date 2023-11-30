import useStorageUserChecker from "../../hooks/useStorageUserChecker";

export const NoPage = () => {

    useStorageUserChecker()

    return (
        <div>
            Упс.., такой страницы нет((
        </div>
    )
}