import React from 'react';

import Topic from './../../Topic.jsx';
import Table from './../../Table.jsx';
import Cell from './../../Cell.jsx';

let codeExamples = {
    python: `import requests

params = {
  "token": "uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb",
  "survey_id": "22",
  "map_id": "3"
}

r = requests.get("https://uclapi.com/workspaces/images/map/live", params=params)
print(r.json())`,

  shell: `curl -G https://uclapi.com/workspaces/images/map/live \\
-d token=uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb \\
-d survey_id=22 \
-d map_id=3`,

  javascript: `fetch("https://uclapi.com/workspaces/images/map/live?token=uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb&survey_id=22&map_id=3",
{
    method: "GET",
})
.then((response) => {
  return response.json()
})
.then((json) => {
  console.log(json);
})`
}

let response = `
<svg xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(0.02, 0.02)">
        <image width="28329.0" height="29882.0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7QAAA..."/>
        <g>
            <g id="603001" transform="translate(13223.0,27477.0)">
                <circle r="128" fill="#FFC90E"/>
            </g>
            <g id="603002" transform="translate(13223.0,26708.0)">
                <circle r="128" fill="#FFC90E"/>
            </g>
            ...
        </g>
    </g>
</svg>
`

let responseCodeExample = {
    python: response,
    javascript: response,
    shell: response
}

export default class WorkspacesGetLiveImage extends React.Component {
    render() {
        return (
            <div>
                <Topic
                    activeLanguage={this.props.activeLanguage}
                    codeExamples={codeExamples}>
                    <h1 id="workspaces/images/map/live">Get a Map's Image with Seat States Shown</h1>
                    <p>
                        Endpoint: <code>https://uclapi.com/workspaces/images/map/live</code>
                    </p>
                    <p>
                        This endpoint takes Survey ID and Map ID as parameters and displays a dynamically generated SVG map, correct as of the time of the API call (aside from caching overhead), showing the map's plan image with a circle overlaid on each seat. This circle is coloured based on whether the seat is occupied or absent (e.g. it's free).
                    </p>
                    <p>
                        There are also several parameters that let you customise the map to suit your app or integration.
                    </p>

                    <Table
                        name="Query Parameters">
                        <Cell
                            name="token"
                            requirement="required"
                            example="uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb"
                            description="Authentication token." />
                        <Cell
                            name="survey_id"
                            requirement="required"
                            example="22"
                            description="The ID of the library's survey which contains the map you want to obtain." />
                        <Cell
                            name="map_id"
                            requirement="required"
                            example="3"
                            description="The ID of the library's survey which contains the map you want to obtain." />
                        <Cell
                            name="image_scale"
                            requirement="optional"
                            example="0.02"
                            description="The SVG image's scale. The default is 0.02. The scale is implemented as an SVG transform scale, and is applied to both the x and the y axes of the image." />
                        <Cell
                            name="circle_radius"
                            requirement="optional"
                            example="128"
                            description="The size of the circle. This must be a positive float value. The default is 128." />
                        <Cell
                            name="absent_colour"
                            requirement="optional"
                            example="#ABE00C"
                            description="The colour of the circle designating a free seat. This must be provided as a hex colour code, including the preceeding # symbol. The default is #ABE00C." />
                        <Cell
                            name="occupied_colour"
                            requirement="optional"
                            example="#FFC90E"
                            description="The colour of the circle designating a taken, or occupied, seat. This must be provided as a hex colour code, including the preceeding # symbol. The default is #FFC90E." />
                    </Table>
                </Topic>

                <Topic
                    activeLanguage={this.props.activeLanguage}
                    codeExamples={responseCodeExample}>
                    <h2>Response</h2>
                    <p>
                        The response will be XML SVG data that contains a base64-encoded PNG map (the same data that is returned by `/workspaces/images/map`) and vector circles designating which seats are free and occupied. Each &lt;g&gt; SVG element contains an ID that corresponds to the sensor ID, where additional information about the sensor can be retrieved via `/workspaces/sensors`. An example of this returned data is on the right.
                    </p>
                </Topic>
            </div>
        )
    }
}
