const attachments = {
    jokeAttachment: {
        'type': 'template',
        'payload': {
            'template_type': 'generic',
            'elements': [
                {
                    'title': 'Choose category:',
                    'buttons': [
                        {
                            'type': 'postback',
                            'title': 'Nerdy',
                            'payload': 'nerdy'
                        },
                        {
                            'type': 'postback',
                            'title': 'Explicit',
                            'payload': 'explicit'
                        },
                        {
                            'type': 'postback',
                            'title': 'Random',
                            'payload': 'random'
                        },
                    ]
                },
            ]
        }
    },
    endAttachment: {
        'type': 'template',
        'payload': {
            'template_type': 'generic',
            'elements': [
                {
                    'title': 'In case you want to hear more:',
                    'buttons': [
                        {
                            'type': 'postback',
                            'title': 'joke',
                            'payload': 'joke'
                        },
                        {
                            'type': 'postback',
                            'title': 'prank',
                            'payload': 'prank'
                        },
                    ]
                },
            ]
        }
    },
    welcomeAttachment: {
        'type': 'template',
        'payload': {
            'template_type': 'generic',
            'elements': [
                {
                    'title': 'Choose one:',
                    'buttons': [
                        {
                            'type': 'postback',
                            'title': 'joke',
                            'payload': 'joke'
                        },
                        {
                            'type': 'postback',
                            'title': 'prank',
                            'payload': 'prank'
                        },
                    ]
                },
            ]
        }
    }
};
module.exports = attachments;
//# sourceMappingURL=attachments.js.map