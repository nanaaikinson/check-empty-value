/**
 * Type guard to check if a value has a size property
 */
interface HasSize {
  readonly size: number;
}

/**
 * Type guard to check if a value has a length property
 */
interface HasLength {
  readonly length: number;
}

/**
 * Type guard functions
 */
const hasSize = (val: unknown): val is HasSize =>
  val != null && typeof (val as any).size === "number";

const hasLength = (val: unknown): val is HasLength =>
  val != null && typeof (val as any).length === "number";

const isPlainObject = (val: unknown): val is Record<PropertyKey, unknown> =>
  val != null &&
  typeof val === "object" &&
  Object.prototype.toString.call(val) === "[object Object]";

/**
 * Test whether a value is "empty".
 *
 * Empty values are defined as:
 * - null or undefined
 * - 0 (for numbers)
 * - empty string
 * - empty array
 * - function with no parameters
 * - Error with empty message
 * - Map/Set/File with size 0
 * - Plain object with no own enumerable properties
 * - Booleans are never considered empty
 *
 * @param val - The value to test
 * @returns True if the value is considered empty, false otherwise
 */
function isEmpty(val: unknown): boolean {
  // Null and undefined
  if (val == null) return true;

  // Primitive types
  switch (typeof val) {
    case "boolean":
      return false;
    case "number":
      return val === 0;
    case "string":
      return val.length === 0;
    case "function":
      return val.length === 0;
  }

  // Arrays (check before general objects)
  if (Array.isArray(val)) {
    return val.length === 0;
  }

  // Error objects
  if (val instanceof Error) {
    return val.message === "";
  }

  // Objects with size property (Map, Set, File, etc.)
  if (hasSize(val)) {
    return val.size === 0;
  }

  // Plain objects - check for own enumerable properties
  if (isPlainObject(val)) {
    return Object.keys(val).length === 0;
  }

  // Objects with length property (but not strings/functions/arrays which are handled above)
  if (hasLength(val)) {
    return val.length === 0;
  }

  // All other values are considered non-empty
  return false;
}

export default isEmpty;

// Named export for convenience
export { isEmpty };
