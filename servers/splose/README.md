# splose MCP by usefulapi

Read splose patients, appointments, invoices, cases; book and cancel appointments, record payments.

**Live endpoint:** `https://splose.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/splose

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://splose.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http splose https://splose.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=splose&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsplose.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "splose": {
      "url": "https://splose.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your splose credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/splose/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your splose **API key** and pick your region (Australia or UK). The workspace owner requests API access from splose Support (paid plans only), then creates the key in splose under My account, API.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `splose_get_account` | read | Get the account behind the API key |
| `splose_list_patients` | read | List patients |
| `splose_get_patient` | read | Get a patient |
| `splose_list_appointments` | read | List appointments |
| `splose_get_appointment` | read | Get an appointment |
| `splose_list_practitioners` | read | List practitioners |
| `splose_get_practitioner` | read | Get a practitioner |
| `splose_list_locations` | read | List locations |
| `splose_get_location` | read | Get a location |
| `splose_list_services` | read | List services |
| `splose_get_service` | read | Get a service |
| `splose_list_contacts` | read | List contacts |
| `splose_get_contact` | read | Get a contact |
| `splose_list_cases` | read | List cases |
| `splose_get_case` | read | Get a case |
| `splose_list_invoices` | read | List invoices |
| `splose_get_invoice` | read | Get an invoice |
| `splose_list_payments` | read | List payments |
| `splose_get_payment` | read | Get a payment |
| `splose_list_payment_methods` | read | List payment methods |
| `splose_list_credit_notes` | read | List credit notes |
| `splose_list_waitlist` | read | List waitlist items |
| `splose_list_patient_forms` | read | List patient forms |
| `splose_list_support_activities` | read | List support activities |
| `splose_list_busy_times` | read | List busy times |
| `splose_list_cancellation_reasons` | read | List cancellation reasons |
| `splose_list_custom_fields` | read | List patient custom fields |
| `splose_get_practitioner_availability` | read | Get a practitioner's availability |
| `splose_find_free_slots` | read | Find free appointment slots |
| `splose_create_appointment` | **write** | Create an appointment |
| `splose_update_appointment` | **write** | Update (reschedule) an appointment |
| `splose_cancel_appointment` | **write** | Cancel an appointment |
| `splose_mark_patient_arrived` | **write** | Mark a patient as arrived |
| `splose_create_patient` | **write** | Create a patient |
| `splose_create_contact` | **write** | Create a contact |
| `splose_record_payment` | **write** | Record a payment against an invoice |
| `splose_usage_status` | meta | Usage status (free-tier meter) |
| `splose_request_feature` | meta | Request a missing feature |
| `splose_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `splose_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `splose_upgrade` (it returns a Stripe Checkout link). Cancel any time with `splose_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `splose_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by splose.
