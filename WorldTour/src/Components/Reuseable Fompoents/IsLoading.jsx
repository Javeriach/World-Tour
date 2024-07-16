import Styles from  "./IsLoading.module.css";
function IsLoading() {
    return (
        <div className={`${Styles.loading} h-100 w-100`}>
            <div className={Styles.spinner}>
            
            </div>
        </div>
    )
}

export default IsLoading;
