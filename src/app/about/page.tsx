import Navbar from '@/components/head/navbar'
import AboutStore from '@/features/about'
export default function about() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <AboutStore />
            </div>
        </div>
    )
}
