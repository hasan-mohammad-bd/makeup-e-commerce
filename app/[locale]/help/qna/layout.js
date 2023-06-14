export async function generateMetadata({ params }) {
    
    return {
      title: 'Sotota Stall || QnA'
    };

}

export default function HelpLayout({children}) {

    return (
        <div>{children}</div>
    )
}