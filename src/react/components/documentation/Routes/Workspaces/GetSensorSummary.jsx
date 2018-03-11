import React from 'react';

import Topic from './../../Topic.jsx';
import Table from './../../Table.jsx';
import Cell from './../../Cell.jsx';

let codeExamples = {
    python: `import requests

params = {
  "token": "uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb",
  "survey_ids": "46,45"
}

r = requests.get("https://uclapi.com/workspaces/sensors/summary", params=params)
print(r.json())`,

  shell: `curl -X GET https://uclapi.com/workspaces/sensors/summary \
-d token=uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb \
-d survey_ids=46,45`,

  javascript: `fetch("https://uclapi.com/workspaces/sensors/summary?token=uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb&survey_ids=46,45",
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

let response = `{
    "surveys": [
        {
            "name": "UCL Cruciform Hub",
            "maps": [
                {
                    "name": "Open Area",
                    "sensors_absent": 47,
                    "sensors_other": 0,
                    "sensors_occupied": 64,
                    "id": "72"
                },
                {
                    "name": "Cluster Areas",
                    "sensors_absent": 76,
                    "sensors_other": 1,
                    "sensors_occupied": 62,
                    "id": "70"
                },
                {
                    "name": "Teaching Rooms",
                    "sensors_absent": 39,
                    "sensors_other": 0,
                    "sensors_occupied": 19,
                    "id": "71"
                }
            ],
            "id": 45
        },
        {
            "name": "UCL Institute of Education Library",
            "maps": [
                {
                    "name": "Level 3",
                    "sensors_absent": 72,
                    "sensors_other": 0,
                    "sensors_occupied": 85,
                    "id": "73"
                },
                {
                    "name": "Level 4",
                    "sensors_absent": 41,
                    "sensors_other": 0,
                    "sensors_occupied": 55,
                    "id": "74"
                },
                {
                    "name": "Level 5",
                    "sensors_absent": 29,
                    "sensors_other": 0,
                    "sensors_occupied": 42,
                    "id": "75"
                }
            ],
            "id": 46
        }
    ],
    "ok": true
}`

let responseCodeExample = {
    python: response,
    javascript: response,
    shell: response
}

export default class WorkspacesGetSensorsSummary extends React.Component {
    render() {
        return (
            <div>
                <Topic
                    activeLanguage={this.props.activeLanguage}
                    codeExamples={codeExamples}>
                    <h1 id="workspaces/sensors/summary">Get Survey Sensors Summary</h1>
                    <p>
                        Endpoint: <code>https://uclapi.com/workspaces/sensors/summary</code>
                    </p>
                    <p>
                        This endpoint summarises, with a one-minute accuracy, the number of seats within each library region that are free and occupied. It is best suited to integrations which show cumulative, live data. Developers can use this endpoint to avoid making many parallel or sequential requests to fetch survey sensor counts.
                    </p>

                    <Table
                        name="Query Parameters">
                        <Cell
                            name="token"
                            requirement="required"
                            example="uclapi-5d58c3c4e6bf9c-c2910ad3b6e054-7ef60f44f1c14f-a05147bfd17fdb"
                            description="Authentication token." />
                        <Cell
                            name="survey_ids"
                            requirement="optional"
                            example="46,45"
                            description="A comma delimited list of Survey IDs. If this parameter is not supplied, summary data for every survey is returned." />
                    </Table>
                </Topic>

                <Topic
                    activeLanguage={this.props.activeLanguage}
                    codeExamples={responseCodeExample}>
                    <h2>Response</h2>
                    <p>
                        This endpoint will return a list with every survey requested, and its associated maps. Within each map is a count of absent (e.g. free) and occupied seats.
                    </p>
                    <Table
                        name="Response">
                        <Cell
                            name="surveys"
                            extra="list"
                            example={`
                                [
                                    {
                                        "name": "UCL Cruciform Hub",
                                        "id": 45,
                                        "maps": [
                                            {
                                                "name": "Open Area",
                                                "id": "72",
                                                "sensors_absent": 47,
                                                "sensors_other": 0,
                                                "sensors_occupied": 64
                                            },
                                            ...
                                        ]
                                    },
                                    ...
                                ]
                            `}
                            description="A list of survey objects, each of which contains a list of maps with associated sensor counts." />
                        
                        <Cell
                            name="surveys[n][name]"
                            extra="string"
                            example="UCL Cruciform Hub"
                            description="The name of the survey (library)." />
                        <Cell
                            name="surveys[n][id]"
                            extra="integer"
                            example="72"
                            description="The survey's ID." />
                        <Cell
                            name="surveys[n][maps]"
                            extra="list"
                            example={`
                                [
                                    {
                                        "name": "Open Area",
                                        "id": "72",
                                        "sensors_absent": 47,
                                        "sensors_other": 0,
                                        "sensors_occupied": 64
                                    },
                                    ...
                                ]
                            `}
                            description="A list of objects representing maps (regions), each of which has a sensor summary." />
                        <Cell
                            name="surveys[n][maps][n][name]"
                            extra="string"
                            example="Open Area"
                            description="Name of the library region (map)." />
                        <Cell
                            name="surveys[n][maps][n][id]"
                            extra="integer"
                            example="72"
                            description="ID of the library region (map)." />
                        <Cell
                            name="surveys[n][maps][n][sensors_absent]"
                            extra="integer"
                            example="47"
                            description="Number of free seats in that section of the library." />
                        <Cell
                            name="surveys[n][maps][n][sensors_occupied]"
                            extra="integer"
                            example="64"
                            description="Number of taken / occupied seats in that section of the library." />
                        <Cell
                            name="surveys[n][maps][n][sensors_other]"
                            extra="integer"
                            example="0"
                            description="Number of seats with an unknown status. This is usually zero." />
                    </Table>
                </Topic>
            </div>
        )
    }
}
