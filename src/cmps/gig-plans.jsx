import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import { showErrorMsg } from '../services/event-bus.service'

export const GigPlans = ({ plans, onSelectPlan }) => {

    const [plan, setPlan] = useState('Basic')

    const handleChange = (ev) => {
        setPlan(ev.target.textContent)
    }

    const onSelect = () => {
        let rank
        let daysToMake
        let price
        if (plan === 'Basic') {
            rank = plans.basicTitle
            daysToMake = plans.basicDaysToMake
            price = plans.basicPrice
        } else if (plan === "Standard") {
            rank = plans.standardTitle
            daysToMake = plans.standardDaysToMake
            price = plans.standardPrice
        } else {
            rank = plans.premiumTitle
            daysToMake = plans.premiumDaysToMake
            price = plans.premiumPrice
        }

        onSelectPlan(rank, daysToMake, price)
    }

    const onContact = () => {
        showErrorMsg('still in development...')
    }

    return (
        <Tabs
            size="xl"
            aria-label="Pricing plan"
            defaultValue={0}
            sx={{ width: 400, "--Tabs-gap": "0px" }}
            className="pricing"
        >
            <TabList
                variant="outlined"
                sx={(theme) => ({

                    borderRadius: 0,
                    [`& .${tabClasses.root}`]: {
                        fontWeight: "xl",
                        flex: 1,
                        bgcolor: "#FAFAFA",
                        position: "relative",
                        height: 55,
                        color: 'grey',


                        [`&.${tabClasses.selected}`]: {
                            bgcolor: "white",

                            color: "success.500"
                        },
                        [`&.${tabClasses.selected}:before`]: {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            bottom: -1,
                            width: "100%",
                            height: 3,
                            bgcolor: "success.400",
                            borderBottom: `1px solid ${theme.vars.palette.divider}`
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
            <TabPanel value={0} style={{ borderLeft: '1px solid #DBDCDE', borderRight: '1px solid #DBDCDE' }}>
                <Typography
                    fontSize="xl4"
                    fontWeight="xl"
                    level="inherit"
                    mt={1}
                    padding={1.5}>

                    {plans.basicTitle}
                </Typography>
                <Typography
                    level="inherit"
                    mt={2}
                    padding={1.5}
                >

                    {plans.basicDescription}
                </Typography>
                <Typography
                    level="inherit"
                    padding={1.5}
                    pb={0}
                >
                    {plans.basicDaysToMake}{(plans.basicDaysToMake <= 1) ? " Day Delivery" : " Days Delivery"}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl4"
                    fontWeight="xl"
                    padding={1.5}
                    pt={0}
                >
                    ${plans.basicPrice}{" "}

                    <Typography
                        fontSize="sm"
                        textColor="text.secondary"
                        fontWeight="md">
                        USD
                    </Typography>
                </Typography>
            </TabPanel>

            <TabPanel value={1} style={{ borderLeft: '1px solid #DBDCDE', borderRight: '1px solid #DBDCDE' }}>
                <Typography
                    fontSize="xl4"
                    fontWeight="xl"
                    level="inherit"
                    mt={1}
                    padding={1.5}>

                    {plans.standardTitle}
                </Typography>
                <Typography
                    level="inherit"
                    mt={2}
                    padding={1.5}
                >

                    {plans.standardDescription}
                </Typography>
                <Typography
                    level="inherit"
                    padding={1.5}
                    pb={0}

                >
                    {plans.standardDaysToMake}{(plans.standardDaysToMake <= 1) ? " Day Delivery" : " Days Delivery"}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl4"
                    fontWeight="xl"
                    padding={1.5}
                    pt={0}

                >
                    ${plans.standardPrice}{" "}

                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                </Typography>
            </TabPanel>
            <TabPanel value={2} style={{ borderLeft: '1px solid #DBDCDE', borderRight: '1px solid #DBDCDE' }}>
                <Typography
                    fontSize="xl4"
                    fontWeight="xl"
                    level="inherit"
                    mt={1}
                    padding={1.5}>

                    {plans.premiumTitle}
                </Typography>
                <Typography
                    level="inherit"
                    mt={2}
                    padding={1.5}
                >

                    {plans.premiumDescription}
                </Typography>
                <Typography
                    level="inherit"
                    padding={1.5}
                    pb={0}

                >
                    {plans.premiumDaysToMake}{(plans.premiumDaysToMake <= 1) ? " Day Delivery" : " Days Delivery"}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl4"
                    fontWeight="xl"
                    padding={1.5}
                    pt={0}

                >
                    ${plans.premiumPrice}{" "}

                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                </Typography>
            </TabPanel>
            <div className='plans-action-btns'>
                <button className='continue-plans-btn' onClick={() => onSelect()}>Continue <span>→</span></button>
                <button className='contact-plans-btn' onClick={() => onContact()}>Contact Seller</button>
            </div>
        </Tabs>
    );
}
