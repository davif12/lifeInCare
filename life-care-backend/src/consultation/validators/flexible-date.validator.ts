import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsFlexibleDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isFlexibleDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (!value) {
            return true; // Campo opcional
          }

          if (typeof value !== 'string') {
            return false;
          }

          // Aceitar formatos:
          // 1. YYYY-MM-DD (data simples)
          // 2. YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601 completo)
          // 3. YYYY-MM-DDTHH:mm:ss (sem timezone)
          
          const dateRegexes = [
            /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/, // ISO 8601
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/ // Sem timezone
          ];

          const matchesFormat = dateRegexes.some(regex => regex.test(value));
          
          if (!matchesFormat) {
            return false;
          }

          // Verificar se é uma data válida
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} deve ser uma data válida no formato YYYY-MM-DD ou ISO 8601`;
        },
      },
    });
  };
}
