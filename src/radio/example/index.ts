import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { v, w } from '@dojo/widget-core/d';
import Radio from '../../radio/Radio';

export class App extends WidgetBase<WidgetProperties> {
	private _inputValue: string;

	onChange(event: Event) {
		const value = (event.target as HTMLInputElement).value;
		this._inputValue = value;
		this.invalidate();
	}

	render() {
		const {
			_inputValue = 'first'
		} = this;

		return v('div', [
			v('h2', {
				innerHTML: 'Radio Examples'
			}),
			v('fieldset', { id: 'example-1' }, [
				v('legend', {}, ['Set of radio buttons with first option selected']),
				w(Radio, {
					key: 'r1',
					checked: _inputValue === 'first',
					value: 'first',
					label: 'First option',
					name: 'sample-radios',
					onChange: this.onChange
				}),
				w(Radio, {
					key: 'r2',
					checked: this._inputValue === 'second',
					value: 'second',
					label: 'Second option',
					name: 'sample-radios',
					onChange: this.onChange
				}),
				w(Radio, {
					key: 'r3',
					checked: this._inputValue === 'third',
					value: 'third',
					label: 'Third option',
					name: 'sample-radios',
					onChange: this.onChange
				})
			]),
			v('fieldset', { id: 'example-2' }, [
				v('legend', {}, ['Set of disabled radio buttons']),
				w(Radio, {
					key: 'r4',
					checked: false,
					disabled: true,
					label: 'First option',
					name: 'sample-radios-disabled'
				}),
				w(Radio, {
					key: 'r5',
					checked: true,
					disabled: true,
					label: 'Second option',
					name: 'sample-radios-disabled'
				})
			])
		]);
	}
}

const Projector = ProjectorMixin(App);
const projector = new Projector();

projector.append();
