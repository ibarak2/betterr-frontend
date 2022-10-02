import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import { showSuccessMsg } from '../services/event-bus.service';

export const GigPlans = ({ gig, plans, onSelectPlan, loggedinUser }) => {

    const [plan, setPlan] = useState('Basic')

    const handleChange = (ev) => {
        setPlan(ev.target.textContent)
    }

    const onSelect = () => {
        let rank
        let daysToMake
        let price
        let planDescription
        if (plan === 'Basic') {
            rank = plans.basicTitle
            daysToMake = plans.basicDaysToMake
            price = plans.basicPrice
            planDescription = plans.basicDescription
        } else if (plan === "Standard") {
            rank = plans.standardTitle
            daysToMake = plans.standardDaysToMake
            price = plans.standardPrice
            planDescription = plans.standardDescription
        } else {
            rank = plans.premiumTitle
            daysToMake = plans.premiumDaysToMake
            price = plans.premiumPrice
            planDescription = plans.premiumDescription
        }

        onSelectPlan(rank, daysToMake, price, planDescription)
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
                    fontSize="xl1"
                    fontWeight="xl"
                    level="inherit"
                    mt={1}
                    ml={1}
                    padding={1.5}>

                    {plans.basicTitle}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl2"
                    fontWeight="xl"
                    textAlign={'right'}
                    mr={2.5}
                    mt={-6}
                >
                    <Typography
                        fontSize="sm"
                        textColor="text.secondary"
                        fontWeight="md">
                        USD
                    </Typography>
                    ${plans.basicPrice}{" "}

                </Typography>
                <Typography
                    level="inherit"
                    mb={2}
                    mt={2.5}
                    ml={2.5}
                    mr={2.5}
                >
                    {plans.basicDescription}
                </Typography>
                <Typography
                    level="inherit"
                    padding={1.5}
                    pb={1}
                    fontWeight="xl"
                >
                    <span className='delivery-icon'><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>
                    {plans.basicDaysToMake}{(plans.basicDaysToMake <= 1) ? " Day Delivery" : " Days Delivery"}
                </Typography>
            </TabPanel>

            <TabPanel value={1} style={{ borderLeft: '1px solid #DBDCDE', borderRight: '1px solid #DBDCDE' }}>
                <Typography
                    fontSize="xl1"
                    fontWeight="xl"
                    level="inherit"
                    mt={1}
                    ml={1}
                    padding={1.5}>

                    {plans.standardTitle}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl2"
                    fontWeight="xl"
                    textAlign={'right'}
                    mr={2.5}
                    mt={-6}

                >
                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                    ${plans.standardPrice}{" "}

                </Typography>
                <Typography
                    level="inherit"
                    mb={2}
                    mt={2.5}
                    ml={2.5}
                    mr={2.5}
                >

                    {plans.standardDescription}
                </Typography>
                <Typography
                    level="inherit"
                    padding={1.5}
                    pb={1}
                    fontWeight="xl"
                >
                    <span className='delivery-icon'><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>

                    {plans.standardDaysToMake}{(plans.standardDaysToMake <= 1) ? " Day Delivery" : " Days Delivery"}
                </Typography>
            </TabPanel>
            <TabPanel value={2} style={{ borderLeft: '1px solid #DBDCDE', borderRight: '1px solid #DBDCDE' }}>
                <Typography
                    fontSize="xl1"
                    fontWeight="xl"
                    level="inherit"
                    mt={1}
                    ml={1}
                    padding={1.5}>

                    {plans.premiumTitle}
                </Typography>
                <Typography
                    textColor="black.400"
                    fontSize="xl2"
                    fontWeight="xl"
                    textAlign={'right'}
                    mr={2.5}
                    mt={-6}
                >
                    <Typography fontSize="sm" textColor="text.secondary" fontWeight="md">
                        USD
                    </Typography>
                    ${plans.premiumPrice}{" "}

                </Typography>
                <Typography
                    level="inherit"
                    mb={2}
                    mt={2.5}
                    ml={2.5}
                    mr={2.5}
                >
                    {plans.premiumDescription}
                </Typography>
                <Typography
                    level="inherit"
                    padding={1.5}
                    pb={1}
                    fontWeight="xl"
                >
                    <span className='delivery-icon'><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg></span>

                    {plans.premiumDaysToMake}{(plans.premiumDaysToMake <= 1) ? " Day Delivery" : " Days Delivery"}
                </Typography>
            </TabPanel>
            <div className='plans-action-btns'>
                <button className='continue-plans-btn' onClick={() => onSelect()}>Continue <span className='right-arrow'>→</span></button>
            </div>
        </Tabs>
    );
}
