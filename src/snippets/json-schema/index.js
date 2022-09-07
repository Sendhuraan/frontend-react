import React from "react";
import Form from '@rjsf/core';
import validator from "@rjsf/validator-ajv6";


const schema = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Person",
	"description": "A person",
	"type": "object",
	"properties":
	{
		"title":
		{
			"description": "Todo's title",
			"type": "string"
		},
		"completed":
		{
			"description": "todo completed",
			"type": "boolean"
		}
	},
	"required": ["title", "completed"]
}

function JSONSchema() {
	return (
		<Form schema={schema} validator={validator} />
	)
}

export default JSONSchema;
