
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={820}
        height={520}
        viewBox="0 0 820 520"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="146" cy="128" r="121" />
        <rect x="38" y="269" rx="0" ry="0" width="225" height="56" />
        <rect x="10" y="344" rx="9" ry="9" width="281" height="79" />
        <rect x="8" y="461" rx="0" ry="0" width="98" height="30" />
        <rect x="136" y="447" rx="32" ry="32" width="159" height="48" />
    </ContentLoader>
)

export default Skeleton