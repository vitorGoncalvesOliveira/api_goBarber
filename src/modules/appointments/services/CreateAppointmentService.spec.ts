import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppoinmentServices';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointment = new FakeAppointmentsRepository();
    const createAppointService = new CreateAppointmentService(fakeAppointment);

    const appointment = await createAppointService.exec({
      date: new Date(),
      provider_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  // it('should not be able to create two appointment on the same time', () => { });
});
