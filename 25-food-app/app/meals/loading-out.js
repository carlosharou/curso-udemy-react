import classess from './loading.module.css';

export default function MealsLoadingPage() {
    return (
        <p className={classess.loading}>Fetching meals...</p>
    )
}