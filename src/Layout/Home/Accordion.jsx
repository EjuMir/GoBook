

const Accordion = () => {
    return (
        <div className="my-10 bg-cyan-800">
                <h2 className="text-3xl font-bold text-center mb-5 bg-gradient-to-br from-cyan-700 to-gray-500">FAQs</h2>
            <div className="collapse collapse-arrow border-2 bg-cyan-800">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-white text-xl font-medium">
                    What This Website Is About?
                </div>
                <div className="collapse-content">
                    <p className="text-white">Its for the bookaholics who are thirst for achieving wisdom</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-2 bg-cyan-800">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl text-white font-medium">
                    Can I Read Books For Free?
                </div>
                <div className="collapse-content">
                    <p className="text-white">You can read for 7 days and after that you have to go through a payment process to acknowledge our hard work</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-2 bg-cyan-800">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl text-white font-medium">
                    How Many Books can I Borrow at a time?
                </div>
                <div className="collapse-content">
                    <p className="text-white">You can borrow as much as you want after the payment process is done</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;