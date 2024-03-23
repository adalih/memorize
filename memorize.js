class Memorize {
    constructor() {
        this.text = "";

        this.selectedStrategy = -1;
    }

    setText(text) {
        this.text = text;
    }

    setSelectedStrategy(strategyIndex) {
        this.selectedStrategy = strategyIndex;
    }
}

// initialize memorize
//
const memorize = new Memorize();

// select strategy
//
function selectStrategy(strategyIndex) {
    memorize.setSelectedStrategy(strategyIndex);
    renderStrategy();
}

// render strategy based on selected strategy button
//
function renderStrategy() {
    document.getElementById("strategy-text").innerHTML =
        "<p>" + strategies[memorize.selectedStrategy] + "</p>";
}

const strategies = {
    0: "<b> BREAK IT DOWN </b><br> \
        <br> When we are approaching a large goal, tackling it all at once can seem insurmountable. \
        <br> Therefore, to make the process more manageable, we can break it down. \
        <br> If it feels daunting to learn all the material at once, how about just one line? \
        <br> Start with just the first line.  Repeat until you know it. \
        <br> Then, work on just the second line.  Repeat until you know it. \
        <br> Add the second line on to the first, and repeat both lines until you are comfortable. \
        <br> Continue with the third line, fourth, and so on. \
        <br> By doing a little at a time, we can slowly add on to what we know, \
        <br> and ensure that we know it well.",
    1: "<b> FREQUENCY OVER INTENSITY </b><br> \
        <br> To learn the material well, we must practice a lot. \
        <br> By maintaining a moderate intensity every session, we can increase the frequency of our sessions. \
        <br> In other words, doing a little bit regularly will add up to a lot in the end. \
        <br> There is value in building consistency through managing expectations: \
        <br> a little progress every time will add up over enough times.",
    2: "<b> WRITE IT DOWN </b><br> \
        <br> When you are first learning the material, try writing it down on paper, \
        <br> each line, one line at a time, one line after the other. \
        <br> Writing the content down helps you process and absorb it in a cognitive manner. \
        <br> Writing the words down in your own handwriting also helps subconsciously signal to your brain \
        <br> that this information is something you believe in.",
    3: "<b> WRITE TO TEST </b><br> \
        <br> On a clean sheet of paper, \
        <br> write down the material from memory. \
        <br> This will force you to be detail-oriented and to process the information in order, \
        <br> one line at a time, one word at a time. \
        <br> When you are done, compare your regurgitation to the actual content. \
        <br> If there are any words or lines you missed, add them in. \
        <br> If there are any words you got wrong, cross them out and correct them. \
        <br> By physically overwriting the words on the page, you are rewriting the correct information into your brain.",
    4: "<b> COMBINE LEARNING WITH MOVEMENT </b><br> \
        <br> If it is difficult to learn while sitting still, try learning while in motion. \
        <br> Language professor John Rassias found that students learned new vocabulary words more quickly \
        <br> when they threw and caught a ball while being introduced to the word. \
        <br> So when learning, try doing a physical movement with every new phrase or line you learn. \
        <br> For example, pacing around the room, making your bed, folding the laundry. \
        <br> Any physical motion that is repetitive, familiar, and so ingrained in your subconscious \
        <br> that you can do it without thinking - using your thinking energy for the new information. \
        <br> By activating two cognitive processes simultaneously - kinesthetic and intellectual - \
        <br> you can ingrain the information more solidly.",
    5: "<b> CONNECT NEW TO KNOWN </b><br> \
        <br> We can broaden our understanding by expanding what we know. \
        <br> To internalize a new piece of information, we can connect it to something we already know. \
        <br> Every time you learn a new line, say it out loud while visualizing it physically. \
        <br> Thereby tying each new verbal command to a physical movement that you can already understand and visualize. \
        <br> This way, when we are reciting, we can internally anchor from what we already know - \
        <br> the physical representations - and recall the description words from there.",
    6: "<b> CREATE MEANINGFUL UNDERSTANDING </b></br> \
        </br> One way to create deep, lasting learning is through forming connections. \
        </br> Connections between ourselves, our past experiences, and our worldview, \
        </br> and the content we are seeking to internalize. \
        </br> These unique, personalized connections are our own to seek and identify. \
        <br> It is this process of forming connections that helps us further our understanding. \
        <br> The deeper and more meaningful the connection, the deeper and more meaningful our understanding.",
    7: "<b> FORCE YOURSELF TO SAY IT FAST </b><br> \
        <br> When you first have a piece memorized, you might take longer to recall certain words or phrases, \
        <br> thereby causing pauses in your recitation. \
        <br> After reciting the content several times with these pauses, try forcing yourself to go fast. \
        <br> You might find that you stumble, you might find that you struggle. \
        <br> But it is through this pressure of speed that you will force yourself to recall the information more quickly, \
        <br> And by practicing faster recall, you are ingraining a smoother transition between all the information.",
    8: "<b> SIMULATE THE PUBLIC EYE </b><br> \
        <br> Practicing in the privacy and psychological safety of your room is one atmosphere, \
        <br> while practicing in the open public is another altogether. \
        <br> Ultimately, we will be delivering the content in the public eye, \
        <br> so it can behoove us to simulate such an environment. \
        <br> Find a space that simulates the pressure of a large crowd. \
        <br> A long hallway, the front of a classroom, the podium of an auditorium. \
        <br> And present the content there. \
        <br> If you feel nervous and pressured, you're doing it right! \
        <br> It is through the practice of putting ourselves in these environments \
        <br> and working through the internal emotions that ensue, \
        <br> that we will improve at managing our emotions and finding peace in front of a real crowd.",
    9: "<b> CONSISTENCY THROUGH SELF-CONSCIOUSNESS </b><br> \
        <br> Have you ever known content well in the privacy of your own room, \
        <br> yet stumble and blank when you present in front of others? \
        <br> The key difference is the self-consciousness caused by the presence (and presumed judgment) \
        <br> of another person. \
        <br> Therefore, practice repeatedly feeling and tolerating such self-consciousness \
        <br> by taking the content out into the world. \
        <br> Recite while on a walk through busy streets, \
        <br> Recite in the supermarket aisles, \
        <br> Recite anywhere and everywhere you fear being judged. \
        <br> After enough time, you may realize who your biggest critic actually is, \
        <br> and how to negotiate peace within.",
};
