const getJournalistById = ((req,res)=>{
    const id = parseInt(req.params.id);

    const journalist = journalists.find(jou=>jou.id===id);

    if(!journalist){
        return res.status(404).json("Error!!! journalist not found");
    }

    res.json(journalist);
})