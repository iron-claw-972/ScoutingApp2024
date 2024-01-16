import {Button, Divider, Stack, Typography} from "@mui/material";
import Page from "../Page";
import {useEffect, useMemo, useState} from "react";
import MatchScoutData from "../MatchScoutData";
import {MatchStage} from "../MatchConstants";
import MSAuto from "./matchscout/MSAuto";
import MSPrematch from "./matchscout/MSPrematch";
import MSPostmatch from "./matchscout/MSPostmatch";

export default function MatchScout() {

    let data = useMemo(() => new MatchScoutData(), []);

    const [currentComponent, setCurrentComponent] = useState(<MSPrematch data={data}/>);
    const [counter, setCounter] = useState(0)

    const update = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        // eslint-disable-next-line default-case
        switch (data.stage) {
            case MatchStage.PRE_MATCH:
                setCurrentComponent(<MSPrematch data={data}/>);
                break;
            case MatchStage.AUTO:
                setCurrentComponent(<MSAuto data={data}/>);
                break;
            case MatchStage.TELEOP:
                setCurrentComponent(<MSAuto data={data}/>);
                break;
            case MatchStage.POST_MATCH:
                setCurrentComponent(<MSPostmatch data={data}/>);
                break;
        }
    }, [counter]);

    // TODO: Form and data validation
    return (
        <Page>
            <Typography variant={"h3"}>Match Scout</Typography>
            <Typography variant={"h5"}>
                {Object.keys(MatchStage)[data.stage].replace("_", " ")}
            </Typography>
            <Divider sx={{
                my: 3
            }}/>
            {currentComponent}
            <Stack direction={"row"} spacing={2} sx={{
                my: 2
            }}>
                {data.stage !== MatchStage.PRE_MATCH &&
                    <Button fullWidth variant={"outlined"} onClick={() => {
                        data.stage--
                        update()
                    }}>
                        Previous
                    </Button>
                }
                {data.stage !== MatchStage.POST_MATCH &&
                    <Button fullWidth variant={"outlined"} onClick={() => {
                        data.stage++
                        update()
                    }}>
                        Next
                    </Button>
                }
                {data.stage === MatchStage.POST_MATCH &&
                    <Button fullWidth color={"success"} variant={"outlined"} onClick={() => {
                        data.submit()
                        data.reset()
                        update()
                    }}>
                        Submit
                    </Button>
                }
            </Stack>
        </Page>
    );
}