import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
    companyProfile: any;
};

const CompanyCard: React.FC<Props> = (props) => {
    const { companyProfile } = props;

    return (
    <Card sx={{ minWidth: 275, mt: 2 }}>
        <CardContent>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
                {companyProfile.companyName}
            </Typography>
            <Typography variant="h5" component="div">
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {companyProfile.symbol}
            </Typography>
            <Typography variant="body1">
                {`Price: $${companyProfile.price}`}
            </Typography>
            <Typography variant="body1">
                {`Average Volume: ${companyProfile.volAvg}`}
            </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
            <a>
                <Button size="small" href={companyProfile.website}>Learn More</Button>
            </a>
            <Button size="small">Financial Insights</Button>
        </CardActions>
    </Card>
    )
};

export default CompanyCard;