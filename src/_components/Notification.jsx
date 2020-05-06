import React from 'react';
import Alert from '@material-ui/lab/Alert';
export default function CompanyDialog(props) {
  const { alert } = props;

  console.log(alert);
  const type = {
    ALERT_SUCCESS: 'success',
    ALERT_ERROR: 'error',
  };
  const notification = alert.message ? (
    <>
      <div className={`alert ${type[alert.type]}`}>{alert.message}</div>
      <Alert severity="success">{alert.message}</Alert>
    </>
  ) : (
    ''
  );

  return notification;
}
