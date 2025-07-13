import { BaseMetadata, ToolAnnotations } from "./schema";

/**
 * Definition for a tool the client can call.
 */
interface Tool extends BaseMetadata {
  /**
   * A human-readable description of the tool.
   *
   * This can be used by clients to improve the LLM's understanding of available tools. It can be thought of like a "hint" to the model.
   */
  description?: string;

  /**
   * A JSON Schema object defining the expected parameters for the tool.
   */
  inputSchema: {
    type: "object";
    properties?: { [key: string]: object };
    required?: string[];
  };

  /**
   * An optional JSON Schema object defining the structure of the tool's output returned in
   * the structuredContent field of a CallToolResult.
   */
  outputSchema?: {
    type: "object";
    properties?: { [key: string]: object };
    required?: string[];
  };

  /**
   * Optional additional tool information.
   *
   * Display name precedence order is: title, annotations.title, then name.
   */
  annotations?: ToolAnnotations;

  /**
   * See [specification/2025-06-18/basic/index#general-fields] for notes on _meta usage.
   */
  _meta?: { [key: string]: unknown };
}

class ToolImpl implements Tool {
  _meta: { [p: string]: unknown };
  annotations: ToolAnnotations;
  description: string;
  inputSchema: { type: "object"; properties?: { [p: string]: object }; required?: string[] };
  name: string;
  outputSchema: { type: "object"; properties?: { [p: string]: object }; required?: string[] };
  title: string;
}