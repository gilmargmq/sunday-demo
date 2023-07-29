import DownloadsBanner from "../components/downloads/DownloadsBanner"
import DownloadsContent from "../components/downloads/DownloadsContent"
import RecipesList from "../components/downloads/RecipesList";

const Downloads = () => {
    return (
        <div>

            <DownloadsBanner />

            <DownloadsContent />

            <RecipesList />

        </div>
    );
}

export default Downloads