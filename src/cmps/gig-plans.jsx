import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';

export const GigPlans = ({ plans }) => {

    const [plan, setPlan] = useState('Basic')

    const handleChange = (ev) => {
        console.log(ev.target.textContent)
        setPlan(ev.target.textContent)
    }

    const onSelect = (ev) => {
        console.log(plan)
    }

    return (
        <Tabs
            size="sm"
            aria-label="Pricing plan"
            defaultValue={0}
            sx={{ width: 343, "--Tabs-gap": "0px" }}
        >
            <TabList
                variant="outlined"
                sx={(theme) => ({

                    borderRadius: 0,
                    [`& .${tabClasses.root}`]: {
                        fontWeight: "lg",
                        flex: 1,
                        bgcolor: "background.body",
                        position: "relative",


                        [`&.${tabClasses.selected}`]: {
                            color: "success.500"
                        },
                        [`&.${tabClasses.selected}:before`]: {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            bottom: -1,
                            width: "100%",
                            height: 2,
                            bgcolor: "success.400",
                        },
                        "&:not(:first-of-type)": {
                            borderLeft: `1px solid ${theme.vars.palette.divider}`,

                        },
                        [`&.${tabClasses.focusVisible}`]: {
                            outlineOffset: "-3px",

                        }
                    }
                })}
            >
                <Tab sx={{ py: 1.5 }} onChange={(ev) => { handleChange(ev) }}>Basic</Tab>
                <Tab onChange={(ev) => { handleChange(ev) }}>Standard</Tab>
                <Tab onChange={(ev) => { handleChange(ev) }}>Premium</Tab>
            </TabList>
            <TabPanel value={0} >
                <Typography level="inherit" mt={2}>
                    {plans.basicDescription}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl3"
                    fontWeight="xl"
                    my={1}
                >
                    ${plans.basicPrice}{" "}
                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                </Typography>
            </TabPanel>
            <TabPanel value={1}>
                <Typography level="inherit" mt={2}>
                    {plans.standardDescription}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl3"
                    fontWeight="xl"
                    my={1}
                >
                    ${plans.standardPrice}{" "}
                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                </Typography>
            </TabPanel>
            <TabPanel value={2}>
                <Typography level="inherit" mt={2}>
                    {plans.premiumDescription}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl3"
                    fontWeight="xl"
                    my={1}
                >

                    ${plans.premiumPrice}{" "}
                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                </Typography>
            </TabPanel>
            <button onClick={() => onSelect()}>Continue <span>→</span></button>
        </Tabs >
    );
}
