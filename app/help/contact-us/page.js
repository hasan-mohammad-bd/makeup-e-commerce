import Link from "next/link";
const Contact = () => {
    return (
        <>
            <div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200">
                <div className="container">
                    <div>
                        <Link href={`/`} className="text-base text-slate-600 hover:text-primary">হোম</Link>
                        <Link href={`/help/contact-us`} className="text-base text-slate-900 hover:text-primary">যোগাযোগ করুন</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="qna mb-20">
                    <div className="heading border-b border-slate-200 py-4 mb-6">
                        <h3 className="text-4xl/[48px] font-bold font-title text-slate-900">যোগাযোগ করুন</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;