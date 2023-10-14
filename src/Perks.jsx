export default function Perks({selected, onChange}){//'selected' = 'perk', 'onChange' = 'setPerks'

    function handleCbClick(ev){
        const {checked, name} = ev.target;//'ev.target' is the element that associated with the event
        if(checked){
            onChange([...selected, name]); 
        } else {//If 'unselect' will trigger this function
            //'filter' creates a new arr that satisfy a provided condition
            //the arrow func is the condition applied to each ele of the arr. If the condition true for the ele, the ele is included in the new arr; else it's excluded
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
       
    }

    return(
        <>
            {/*Wifi*/}
            <label className="flex border p-4 cursor-pointer rounded-2xl gap-2 "  > {/*Use of label  is for screen reader users(will read out loud the label ) and for users who have difficulties clicking smaller regions b/c the clicking the text next to input(e.g.checkbox) selects the checkbox */}

                {/*'Cursor-pointer' is to change the cursor to a 'hand cursor' when hovering on elements that can be clicked*/}
                <input type="checkbox" checked={selected.includes('Wifi')} name="Wifi" onChange={handleCbClick}/>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>

                <span>Wifi</span>
            </label >

            {/*Free Parking*/}
            <label className="flex border p-4 rounded-2xl gap-2 cursor-pointer" > {/*Use of label  is for screen reader users(will read out loud the label ) and for users who have difficulties clicking smaller regions b/c the clicking the text next to input(e.g.checkbox) selects the checkbox */}
                <input type="checkbox" checked={selected.includes('Parking')} name="Parking" onChange={handleCbClick}/>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>

                <span>Free parking spot</span>
            </label >

            {/*TV*/}
            <label className="flex border p-4 rounded-2xl gap-2 cursor-pointer"> {/*Use of label  is for screen reader users(will read out loud the label ) and for users who have difficulties clicking smaller regions b/c the clicking the text next to input(e.g.checkbox) selects the checkbox */}
                <input type="checkbox" checked={selected.includes('TV')} name="TV" onChange={handleCbClick}/>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                    </svg>

                <span>TV</span>
            </label >

            {/*Pets*/}
            <label className="flex border p-4 rounded-2xl gap-2 cursor-pointer" > {/*Use of label  is for screen reader users(will read out loud the label ) and for users who have difficulties clicking smaller regions b/c the clicking the text next to input(e.g.checkbox) selects the checkbox */}
                <input type="checkbox" checked={selected.includes('Pets')} name="Pets" onChange={handleCbClick}/>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>

                <span>Pets</span>
            </label >

            {/*Private Entrance*/}
            <label className="flex border p-4 rounded-2xl gap-2 cursor-pointer" > {/*Use of label  is for screen reader users(will read out loud the label ) and for users who have difficulties clicking smaller regions b/c the clicking the text next to input(e.g.checkbox) selects the checkbox */}
                <input type="checkbox" checked={selected.includes('Entrance')} name="Entrance" onChange={handleCbClick}/>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                <span>Private entrance</span>
            </label >

            {/*Pool*/}
            <label className="flex border p-4 rounded-2xl gap-2 cursor-pointer" > 
                <input type="checkbox" checked={selected.includes('Pool')} name="Pool" onChange={handleCbClick}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>

                <span>Pool</span>
            </label >
        </>
    );
}