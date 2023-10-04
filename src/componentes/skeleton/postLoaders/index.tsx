import styles from './styles.module.css';

const PostLoaders = () => {
    console.log('PostLoaders');
    return <div className={styles.wrapper}>
        <div className={styles.postSkeleton}>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}></div>
        </div>
        <div className={styles.postSkeleton}>
            <div className={styles.skeletonHeader}></div>
            <div className={styles.skeletonBody}></div>
        </div>
    </div>
}
export default PostLoaders;