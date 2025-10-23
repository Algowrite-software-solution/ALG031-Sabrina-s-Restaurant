<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Online Reservation</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Outfit', sans-serif; background-color: #F5F5DC;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin-top: 20px; border: 1px solid #dddddd;">
        <tr>
            <td align="center" bgcolor="#8B0000" style="padding: 20px 0 20px 0;">
                <h1 style="color: #FFFFFF; font-family: 'Cormorant Garamond', serif; margin: 0; font-size: 28px;">Sabrina's Restaurant</h1>
            </td>
        </tr>
        <tr>
            <td bgcolor="#FFFFFF" style="padding: 40px 30px 40px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td style="color: #153643; font-family: 'Outfit', sans-serif; font-size: 24px; border-bottom: 2px solid #F5F5DC; padding-bottom: 20px;">
                            <b>New Online Reservation</b>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 0 30px 0; color: #153643; font-family: 'Outfit', sans-serif; font-size: 16px; line-height: 24px;">
                            A new reservation has been made via the website. Please see the details below and add to the system.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F5F5DC; padding: 20px; border-radius: 8px;">
                                <tr>
                                    <td width="120" style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: bold;">Guest Name:</td>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px;">{{ $data['name'] }}</td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: bold;">Email:</td>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px;">
                                        <a href="mailto:{{ $data['email'] }}" style="color: #8B0000; text-decoration: underline;">{{ $data['email'] }}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: bold;">Phone:</td>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px;">{{ $data['phone'] }}</td>
                                </tr>
                                <tr style="border-top: 1px solid #FFFFFF;">
                                    <td style="padding-top: 20px; padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: bold;">Date:</td>
                                    <td style="padding-top: 20px; padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px;">{{ \Carbon\Carbon::parse($data['date'])->format('l, F j, Y') }}</td>
                                </tr>
                                {{-- <tr>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: bold;">Party Size:</td>
                                    <td style="padding-bottom: 10px; font-family: 'Outfit', sans-serif; font-size: 16px;">{{ $data['adults'] }} Adults, {{ $data['children'] ?? 0 }} Children</td>
                                </tr> --}}
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#8B0000" style="padding: 20px 30px 20px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td width="75%" style="color: #FFFFFF; font-family: 'Outfit', sans-serif; font-size: 14px;">
                            Sabrina’s Spanish Cuisine &copy; 2025
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>