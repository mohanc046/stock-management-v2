import { Grid, Typography } from '@mui/material';

import AnalyticCard from 'components/cards/statistics/AnalyticCard';

const DashboardDefault = () => {

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>

      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>

      {
        [
          {
            title: "Total items",
            count: "4,42,236",
            extra: "35,000"
          },
          {
            title: "Total Category",
            count: "40",
            extra: "0"
          },
          {
            title: "Total Company",
            count: "1",
            extra: "0"
          },
          {
            title: "Total Products",
            count: "15",
            extra: "1"
          },
          {
            title: "Total Paid Orders",
            count: "15,800",
            extra: "1,943"
          },
          {
            title: "Total Users",
            count: "78,250",
            extra: "8,900"
          },
          {
            title: "Total Warehouse",
            count: "21",
          }
        ].map(item => {
          return <Grid item xs={12} sm={6} md={4} lg={3}>
            <AnalyticCard title={item.title} count={item.count} extra={item?.extra} />
          </Grid>
        })

      }
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
  );
};

export default DashboardDefault;
