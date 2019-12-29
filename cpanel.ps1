robocopy client/public cpanel/client/public /E
robocopy server/dist cpanel/server/dist /E
robocopy server cpanel/server package.json
robocopy server/public cpanel/server/public /E
robocopy ./ cpanel package.json

$props = @{
    Path= "cpanel/*"
    DestinationPath= "website.zip"
    Force= $True
}
Compress-Archive @props

Remove-Item "cpanel" -Recurse
